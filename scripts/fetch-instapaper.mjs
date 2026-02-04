/**
 * Fetches all bookmarks from Instapaper and writes them to public/instapaper.json
 *
 * Required environment variables:
 *   INSTAPAPER_CONSUMER_KEY
 *   INSTAPAPER_CONSUMER_SECRET
 *   INSTAPAPER_ACCESS_TOKEN
 *   INSTAPAPER_ACCESS_TOKEN_SECRET
 */

import OAuth from 'oauth-1.0a'
import crypto from 'crypto'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = join(__dirname, '..', 'public', 'data', 'instapaper', 'data.json')
const BOOKMARKS_ENDPOINT = 'https://www.instapaper.com/api/1.1/bookmarks/list'

const {
  INSTAPAPER_CONSUMER_KEY,
  INSTAPAPER_CONSUMER_SECRET,
  INSTAPAPER_ACCESS_TOKEN,
  INSTAPAPER_ACCESS_TOKEN_SECRET,
} = process.env

function validateEnv() {
  const required = [
    'INSTAPAPER_CONSUMER_KEY',
    'INSTAPAPER_CONSUMER_SECRET',
    'INSTAPAPER_ACCESS_TOKEN',
    'INSTAPAPER_ACCESS_TOKEN_SECRET',
  ]

  const missing = required.filter((key) => !process.env[key])
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`,
    )
  }
}

function createOAuthClient() {
  return OAuth({
    consumer: {
      key: INSTAPAPER_CONSUMER_KEY,
      secret: INSTAPAPER_CONSUMER_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(baseString, key) {
      return crypto.createHmac('sha1', key).update(baseString).digest('base64')
    },
  })
}

async function fetchAllBookmarks(oauth, token) {
  const allBookmarks = []
  let hasMore = true
  let have = ''

  while (hasMore) {
    const requestData = {
      url: BOOKMARKS_ENDPOINT,
      method: 'POST',
      data: {
        folder_id: 'archive',
        limit: '500',
        ...(have && { have }),
      },
    }

    const headers = oauth.toHeader(oauth.authorize(requestData, token))

    const response = await fetch(BOOKMARKS_ENDPOINT, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(requestData.data),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API error ${response.status}: ${errorText}`)
    }

    const data = await response.json()

    // API returns { user: {...}, bookmarks: [...] }
    const bookmarks = data.bookmarks || []

    if (bookmarks.length === 0) {
      hasMore = false
    } else {
      allBookmarks.push(...bookmarks)
      // Build "have" parameter for pagination (comma-separated bookmark IDs)
      have = allBookmarks.map((b) => b.bookmark_id).join(',')

      // If we got less than the limit, we've reached the end
      if (bookmarks.length < 500) {
        hasMore = false
      }
    }
  }

  return allBookmarks
}

function transformBookmark(bookmark) {
  return {
    id: bookmark.bookmark_id,
    url: bookmark.url,
    title: bookmark.title,
    description: bookmark.description || '',
    time_added: bookmark.time,
    progress: bookmark.progress,
    progress_timestamp: bookmark.progress_timestamp,
    starred: bookmark.starred === '1',
    hash: bookmark.hash,
  }
}

async function main() {
  console.log('Starting Instapaper bookmark fetch...')

  validateEnv()

  const oauth = createOAuthClient()
  const token = {
    key: INSTAPAPER_ACCESS_TOKEN,
    secret: INSTAPAPER_ACCESS_TOKEN_SECRET,
  }

  try {
    const bookmarks = await fetchAllBookmarks(oauth, token)
    console.log(`Fetched ${bookmarks.length} bookmarks`)

    const output = {
      lastUpdated: new Date().toISOString(),
      count: bookmarks.length,
      bookmarks: bookmarks.map(transformBookmark),
    }

    // Ensure public/data/instapaper directory exists
    const dataDir = join(__dirname, '..', 'public', 'data', 'instapaper')
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true })
    }

    writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2))
    console.log(`Written to ${OUTPUT_PATH}`)
  } catch (error) {
    console.error('Error fetching bookmarks:', error.message)
    process.exit(1)
  }
}

main()

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
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE_OUTPUT_DIR = join(__dirname, '..', 'public', 'data', 'instapaper')
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
    title: bookmark.title.replace(/https?:\/\/\S+/g, '').trim(),
    description: bookmark.description || '',
    time_added: bookmark.time,
    progress: bookmark.progress,
    progress_timestamp:
      bookmark.progress_timestamp > 0
        ? bookmark.progress_timestamp
        : Math.floor(Date.now() / 1000),
  }
}

function timestampToDateParts(timestamp) {
  const date = new Date(timestamp * 1000)
  return {
    year: String(date.getFullYear()),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    day: String(date.getDate()).padStart(2, '0'),
  }
}

function groupBookmarksByDate(bookmarks) {
  const grouped = {}
  for (const bookmark of bookmarks) {
    const { year, month, day } = timestampToDateParts(
      bookmark.progress_timestamp,
    )

    if (!grouped[year]) {
      grouped[year] = {}
    }
    if (!grouped[year][month]) {
      grouped[year][month] = {}
    }
    if (!grouped[year][month][day]) {
      grouped[year][month][day] = []
    }
    grouped[year][month][day].push(bookmark)
  }
  return grouped
}

function loadExistingYearData(year) {
  const filePath = join(BASE_OUTPUT_DIR, year, 'data.json')
  if (existsSync(filePath)) {
    try {
      const content = readFileSync(filePath, 'utf-8')
      return JSON.parse(content)
    } catch (e) {
      console.warn(`Could not parse existing ${year}/data.json, starting fresh`)
      return {}
    }
  }
  return {}
}

function mergeYearData(existingData, newData) {
  const merged = JSON.parse(JSON.stringify(existingData)) // Deep clone
  const newBookmarks = [] // Track newly added bookmarks with their location

  for (const month of Object.keys(newData)) {
    if (!merged[month]) {
      merged[month] = {}
    }
    for (const day of Object.keys(newData[month])) {
      if (!merged[month][day]) {
        merged[month][day] = []
      }

      // Get existing bookmark IDs for this day
      const existingIds = new Set(merged[month][day].map((b) => b.id))

      // Only add new bookmarks that don't already exist
      for (const bookmark of newData[month][day]) {
        if (!existingIds.has(bookmark.id)) {
          merged[month][day].push(bookmark)
          newBookmarks.push({ month, day, bookmark })
        }
      }
    }
  }

  return merged
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
    let bookmarks = await fetchAllBookmarks(oauth, token)
    bookmarks = bookmarks.map(transformBookmark)
    console.log(`Fetched ${bookmarks.length} bookmarks`)

    // Group bookmarks by year/month/day
    const groupedByDate = groupBookmarksByDate(bookmarks)

    // Ensure output directory exists
    if (!existsSync(BASE_OUTPUT_DIR)) {
      mkdirSync(BASE_OUTPUT_DIR, { recursive: true })
    }

    // Write a separate file for each year, merging with existing data
    const years = Object.keys(groupedByDate).sort()
    for (const year of years) {
      const existingData = loadExistingYearData(year)
      const merged = mergeYearData(existingData, groupedByDate[year])

      // Ensure year directory exists
      const yearDir = join(BASE_OUTPUT_DIR, year)
      if (!existsSync(yearDir)) {
        mkdirSync(yearDir, { recursive: true })
      }

      const outputPath = join(yearDir, 'data.json')
      writeFileSync(outputPath, JSON.stringify(merged, null, 2))
      console.log(`Written ${year}/data.json`)
    }

    console.log(`Done! Updated ${years.length} yearly files`)
  } catch (error) {
    console.error('Error fetching bookmarks:', error.message)
    process.exit(1)
  }
}

main()

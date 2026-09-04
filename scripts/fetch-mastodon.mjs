/**
 * Fetches the latest posts and boosts from Mastodon and writes them to
 * public/data/mastodon/latest.json
 *
 * No authentication required - account statuses are a public endpoint.
 * Favourites are deliberately not included: /api/v1/favourites is private
 * and would require an OAuth token with the read:favourites scope.
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = join(__dirname, '..', 'public', 'data', 'mastodon')

const INSTANCE = 'https://mastodon.social'
const ACCOUNT = 'mstrlaw'
const LIMIT = 3
const EXCERPT_LENGTH = 180

async function getJson(url) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`API error ${response.status}: ${errorText}`)
  }

  return response.json()
}

async function lookupAccountId() {
  const account = await getJson(
    `${INSTANCE}/api/v1/accounts/lookup?acct=${ACCOUNT}`,
  )
  return account.id
}

async function fetchStatuses(accountId) {
  // Over-fetch so the visibility filter below still leaves enough entries.
  // exclude_replies drops reply-toots but keeps boosts.
  return getJson(
    `${INSTANCE}/api/v1/accounts/${accountId}/statuses?limit=10&exclude_replies=true`,
  )
}

const HTML_ENTITIES = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x27;': "'",
  '&nbsp;': ' ',
}

function htmlToExcerpt(html) {
  const text = (html || '')
    // Block boundaries become spaces so words don't run together
    .replace(/<\/p>|<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#x27;|&nbsp;/g, (m) => HTML_ENTITIES[m])
    .replace(/\s+/g, ' ')
    .trim()

  if (text.length <= EXCERPT_LENGTH) return text

  const truncated = text.slice(0, EXCERPT_LENGTH)
  const lastSpace = truncated.lastIndexOf(' ')
  return `${(lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated).trimEnd()}…`
}

function transformStatus(status) {
  // For a boost, everything shown comes from the original toot - but the
  // timestamp is when it was boosted onto the timeline.
  const source = status.reblog ?? status
  const isBoost = Boolean(status.reblog)
  const media = source.media_attachments?.find((m) => m.type === 'image')

  return {
    id: status.id,
    type: isBoost ? 'boost' : 'post',
    url: source.url,
    createdAt: status.created_at,
    excerpt: htmlToExcerpt(source.content),
    author: isBoost
      ? {
          acct: source.account.acct,
          displayName: source.account.display_name,
          url: source.account.url,
        }
      : null,
    media: media
      ? {
          url: media.preview_url,
          alt: media.description || '',
          width: media.meta?.small?.width ?? null,
          height: media.meta?.small?.height ?? null,
        }
      : null,
    counts: {
      replies: source.replies_count,
      reblogs: source.reblogs_count,
      favourites: source.favourites_count,
    },
  }
}

async function main() {
  console.log('Starting Mastodon status fetch...')

  try {
    const accountId = await lookupAccountId()
    const statuses = await fetchStatuses(accountId)

    const latest = statuses
      .filter((status) => status.visibility === 'public')
      .slice(0, LIMIT)
      .map(transformStatus)

    console.log(`Fetched ${latest.length} statuses`)

    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR, { recursive: true })
    }

    // Only the current top few are wanted, so this overwrites rather than
    // merging with what is already on disk.
    const outputPath = join(OUTPUT_DIR, 'latest.json')
    writeFileSync(
      outputPath,
      JSON.stringify(
        { lastUpdated: new Date().toISOString(), statuses: latest },
        null,
        2,
      ),
    )

    console.log('Written mastodon/latest.json')
  } catch (error) {
    console.error('Error fetching statuses:', error.message)
    process.exit(1)
  }
}

main()

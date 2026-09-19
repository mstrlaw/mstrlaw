// Sveltia's markdown widget has no "open in new tab" control, so external
// links are marked here at build time instead of by hand while writing.
// Links that already carry a target — the pre-CMS posts are written in raw
// <a> HTML and set it themselves — are left alone.
const SITE_HOST = 'mstrlaw.com'

const isExternal = (href) => {
  if (typeof href !== 'string' || href === '') return false
  // Protocol-relative URLs have no scheme for URL() to parse, so give it one.
  const absolute = href.startsWith('//') ? `https:${href}` : href
  let url
  try {
    url = new URL(absolute)
  } catch {
    // Relative paths, bare anchors, and anything else without a host.
    return false
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return false
  return url.hostname !== SITE_HOST && url.hostname !== `www.${SITE_HOST}`
}

// A plain object rather than Sätteri's defineHastPlugin() helper, which is
// only an identity function — this way the config imports nothing from
// `satteri` itself, which is not a direct dependency.
export default {
  name: 'external-links-new-tab',
  element: {
    filter: ['a'],
    visit: (node, ctx) => {
      const props = node.properties ?? {}
      if (props.target || !isExternal(props.href)) return
      ctx.setProperty(node, 'target', '_blank')
      ctx.setProperty(node, 'rel', 'noopener noreferrer')
    },
  },
}

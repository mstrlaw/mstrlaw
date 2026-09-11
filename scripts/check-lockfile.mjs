// Guards against npm silently pruning platform-specific optional dependencies
// from package-lock.json.
//
// Running `npm install <pkg>` or `npm uninstall <pkg>` on macOS drops entries
// that only resolve on other platforms — @img/sharp-wasm32's @emnapi/* deps are
// the ones that bite here. The lockfile still works locally, but `npm ci` on the
// Linux runner refuses it, so the break only shows up in CI.
//
// This walks every dependency edge in the lockfile using npm's own resolution
// rules, ignoring platform. Anything unresolvable means the lockfile is
// incomplete and needs a full regeneration:
//
//   rm -rf node_modules package-lock.json && npm install
//
// Run with: npm run check-lockfile

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'))
const packages = lock.packages ?? {}

/** Walks up the node_modules chain the way node/npm resolves a dependency. */
const resolves = (fromPath, dep) => {
  const segments = fromPath ? fromPath.split('/node_modules/') : ['']
  while (segments.length > 0) {
    const candidate = `${segments.join('/node_modules/')}/node_modules/${dep}`.replace(/^\/+/, '')
    if (candidate in packages) return true
    segments.pop()
  }
  return `node_modules/${dep}` in packages
}

const missing = []
for (const [path, meta] of Object.entries(packages)) {
  const deps = { ...meta.dependencies, ...meta.optionalDependencies }
  for (const dep of Object.keys(deps)) {
    if (!resolves(path, dep)) missing.push({ from: path || '(root)', dep })
  }
}

if (missing.length > 0) {
  console.error(`\npackage-lock.json is incomplete — ${missing.length} unresolvable dependency edge(s):\n`)
  for (const { from, dep } of missing.slice(0, 20)) {
    console.error(`  ${from}  ->  ${dep}`)
  }
  if (missing.length > 20) console.error(`  ... and ${missing.length - 20} more`)
  console.error('\n`npm ci` will fail on this. Regenerate the lockfile:\n')
  console.error('  rm -rf node_modules package-lock.json && npm install\n')
  process.exit(1)
}

console.log(`package-lock.json is self-consistent (${Object.keys(packages).length} packages, all edges resolve).`)

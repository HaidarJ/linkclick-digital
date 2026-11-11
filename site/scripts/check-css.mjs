// Fails the build check if a scroll-driven timeline ended up inside the `animation` shorthand.
// Browsers reject `animation: name linear both view()` (and named or scroll() timelines there), which
// drops the whole animation. Run after `npm run build`: node scripts/check-css.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = new URL('../dist/_astro/', import.meta.url).pathname;
const files = readdirSync(dir).filter((f) => f.endsWith('.css'));
const bad = [];
let timelines = 0;
for (const f of files) {
  const css = readFileSync(join(dir, f), 'utf8');
  timelines += (css.match(/animation-timeline\s*:/g) || []).length;
  for (const m of css.matchAll(/animation\s*:([^;}]*)/g)) {
    const value = m[1].replace(/var\([^)]*\)/g, '');
    if (/\b(view|scroll)\(|(^|[\s,])--[\w-]+/.test(value)) bad.push(`${f}: animation:${m[1].trim()}`);
  }
}
if (bad.length) {
  console.error(`✗ ${bad.length} scroll-driven animation(s) folded into the shorthand (browsers drop these):`);
  for (const b of bad) console.error('  ' + b);
  process.exit(1);
}
console.log(`✓ CSS: ${files.length} file(s), ${timelines} animation-timeline declarations kept separate`);

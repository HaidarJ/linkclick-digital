// Checks every Markdown page against content/WRITING-SPEC.md: internal links point to real pages,
// title/description lengths, banned words, the brand name, dashes, and leftover placeholders.
// Run from site/:  node scripts/check-content.mjs   (exit code 1 on errors)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../src/content/', import.meta.url).pathname;
const files = [];
const walk = (d) => readdirSync(d).forEach((n) => { const p = join(d, n); statSync(p).isDirectory() ? walk(p) : n.endsWith('.md') && files.push(p); });
walk(ROOT);

const url = (f) => {
  const r = relative(ROOT, f).replace(/\.md$/, '');
  return r.startsWith('insights/') ? `/${r}/` : r.startsWith('pages/') ? `/${r.slice(6)}/` : null;
};
const valid = new Set(['/', '/contact/', ...files.map(url)]);
const BANNED = /\b(elevate|unlock|unleash|seamless(ly)?|supercharge|cutting-edge|next-gen|game-changer|leverag(e|es|ing)|robust|fast-paced world|look no further|passionate about)\b/i;

let errors = 0, warnings = 0, todos = 0;
const report = (lvl, f, msg) => { lvl === 'E' ? errors++ : warnings++; console.log(`${lvl}  ${relative(ROOT, f)}: ${msg}`); };

for (const f of files.sort()) {
  const src = readFileSync(f, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const body = src.slice(fm.length + 8);
  const field = (k) => fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1] ?? '';
  const title = field('title'), desc = field('description');
  if (!title) report('E', f, 'no title');
  else if (title.length > 60) report('W', f, `title is ${title.length} chars (aim ≤ 60)`);
  if (desc.length < 110 || desc.length > 165) report('W', f, `description is ${desc.length} chars (aim 120–160)`);
  for (const m of src.matchAll(/\]\((\/[^)\s#]*)(#[^)]*)?\)|href:\s*"(\/[^"#]*)[^"]*"/g)) {
    const href = m[1] || m[3];   // markdown links in the body, or href: "…" in frontmatter (related links)
    if (href && !valid.has(href)) report('E', f, `link to a page that doesn't exist: ${href}`);
  }
  for (const [, , , href] of src.matchAll(/(\]\(|href:\s*")((\/[^)"\s]*))/g)) {
    if (href && !href.endsWith('/') && !href.includes('#')) report('W', f, `link without trailing slash: ${href}`);
  }
  const text = src.replace(/\]\([^)]*\)/g, ']');
  const banned = text.match(BANNED);
  if (banned) report('E', f, `banned word: "${banned[0]}"`);
  const bare = text.match(/\bLinkclick\b(?! Digital)(?!_digital)(?!digital)/);
  if (bare) report('E', f, '"Linkclick" without "Digital"');
  if (/[—–]/.test(body)) report('W', f, 'em or en dash in the body');
  if (/£\s?\d/.test(text) && !f.includes('/insights/')) report('W', f, 'a £ figure: check it is sourced and not a Linkclick price');
  // The owner allows info@linkclickdigital.com for data requests and complaints only (2026-11-10).
  const emails = (text.match(/\b[\w.+-]+@[\w-]+\.[\w.]+\b/g) || []).filter((e) => !(e === 'info@linkclickdigital.com' && /pages\/(privacy|complaint-policy)\.md$/.test(f)));
  if (emails.length) report('E', f, `email address in copy: ${emails[0]}`);
  todos += (src.match(/\[CLIENT TO CONFIRM/g) || []).length;
}
console.log(`\n${files.length} files · ${errors} errors · ${warnings} warnings · ${todos} client placeholders`);
process.exit(errors ? 1 : 0);

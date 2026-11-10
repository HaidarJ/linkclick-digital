// Crawls the built site (dist/) and tests every link: internal pages and files, #section anchors,
// and every external URL. Run from site/ after a build:  node scripts/check-links.mjs  [--no-external]
// Exit code 1 if an internal link or anchor is broken, or an external link is definitely dead (404/410/DNS).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://www.linkclickdigital.com';
const checkExternal = !process.argv.includes('--no-external');

const pages = [];
const walk = (d) => readdirSync(d).forEach((n) => { const p = join(d, n); statSync(p).isDirectory() ? walk(p) : n.endsWith('.html') && pages.push(p); });
walk(DIST);

const urlOf = (file) => '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '');
const html = new Map(pages.map((f) => [urlOf(f), readFileSync(f, 'utf8')]));
const fileOf = new Map(pages.map((f) => [urlOf(f), f]));
const ids = (src) => new Set([...src.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

function resolveInternal(path) {
  const clean = decodeURIComponent(path.split('?')[0]);
  for (const c of [clean, clean.endsWith('/') ? clean + 'index.html' : clean + '/index.html']) {
    const f = join(DIST, c);
    if (existsSync(f) && statSync(f).isFile()) return f;
  }
  return null;
}

const internalErrors = [], external = new Map();
let internalCount = 0, anchorCount = 0;
for (const [page, src] of html) {
  const body = src.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  for (const [, attr, raw] of body.matchAll(/\s(href|src)="([^"]+)"/g)) {
    const href = raw.replace(/&amp;/g, '&');
    if (/^(mailto:|tel:|data:|javascript:)/.test(href)) continue;
    if (/^https?:\/\//.test(href)) {
      if (href.startsWith(SITE)) continue; // canonical / og tags point at the live domain
      if (!external.has(href)) external.set(href, new Set());
      external.get(href).add(page);
      continue;
    }
    const [path, frag] = href.split('#');
    const target = path === '' ? page : new URL(path, SITE + page).pathname;
    internalCount++;
    const file = path === '' ? fileOf.get(page) : resolveInternal(target);   // "#id" alone means this page
    if (!file) { internalErrors.push(`${page}: ${attr}="${href}" → no such page or file`); continue; }
    if (frag) {
      anchorCount++;
      const t = file.endsWith('.html') ? readFileSync(file, 'utf8') : '';
      if (!ids(t).has(frag)) internalErrors.push(`${page}: "${href}" → no element with id="${frag}"`);
    }
  }
}

console.log(`${html.size} pages · ${internalCount} internal links · ${anchorCount} #anchors · ${external.size} external URLs`);
internalErrors.forEach((e) => console.log('BROKEN  ' + e));

let dead = 0;
if (checkExternal) {
  const results = [];
  const queue = [...external.keys()];
  const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';
  async function check(url) {
    for (const method of ['HEAD', 'GET']) {
      try {
        const r = await fetch(url, { method, redirect: 'follow', headers: { 'user-agent': UA, accept: 'text/html,*/*' }, signal: AbortSignal.timeout(20000) });
        if (r.ok || method === 'GET') return { url, status: r.status, final: r.url };
      } catch (e) {
        if (method === 'GET') return { url, status: 0, error: e.cause?.code || e.name };
      }
    }
  }
  await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) results.push(await check(queue.shift())); }));
  const bad = results.filter((r) => r.status >= 400 || r.status === 0).sort((a, b) => a.status - b.status);
  for (const r of bad) {
    const definite = r.status === 404 || r.status === 410 || ['ENOTFOUND', 'ECONNREFUSED'].includes(r.error);
    if (definite) dead++;
    const label = definite ? 'DEAD   ' : 'CHECK  ';
    console.log(`${label} ${r.status || r.error} ${r.url}  (on ${[...external.get(r.url)].join(', ')})`);
  }
  console.log(`external: ${results.length - bad.length} ok · ${dead} dead · ${bad.length - dead} blocked or unclear (bot protection or timeouts; check by hand)`);
}
process.exit(internalErrors.length || dead ? 1 : 0);

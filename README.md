# Linkclick Digital website

The relaunch of [linkclickdigital.com](https://www.linkclickdigital.com/): a static Astro site for a
London digital agency (UGC, digital marketing, web design and AI automation for founder-led UK businesses).

## What's where

| Folder | What it holds |
|---|---|
| `site/` | The Astro site. `src/content/pages/` and `src/content/insights/` hold the copy as Markdown; `src/pages/` the routes; `src/components/` the layout pieces; `src/styles/` the CSS. |
| `mockup/homepage.html` | The approved homepage mockup. `site/scripts/port-mockup.py` regenerates the homepage, header, footer and styles from it. |
| `design/` | Design direction (`DESIGN.md`), tokens and the asset checklist. |
| `content/` | SEO + GEO strategy, page briefs and the writing spec the copy follows. |
| `integrations/google-apps-script/` | The enquiry form back end (Google Sheet + email), with set-up steps at the top of the file. |
| `.github/workflows/deploy.yml` | Builds every push; publishes `main` to GitHub Pages once `DEPLOY_PAGES` is set. |

## Work on it locally

```bash
cd site
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in site/dist
node scripts/check-content.mjs   # copy rules: links, titles, banned words, placeholders
node scripts/check-links.mjs     # crawls dist/: every internal link, #anchor and external URL
```

Node 22.12 or newer.

## Edit copy

Each page is a Markdown file whose path is its URL: `site/src/content/pages/services/web-design.md` is
`/services/web-design/`. Frontmatter holds the title, meta description, H1, lede, breadcrumb, FAQ and
"Where to next" links. Follow `content/WRITING-SPEC.md`. Anything still waiting for a client fact is
written as `[CLIENT TO CONFIRM: …]` and shows highlighted on the page; search for it before launch.

Business settings (booking link, form endpoint, budget bands) live in `site/src/lib/site.ts`.

## Go live (GitHub Pages)

1. GitHub Pages needs a public repository on a free plan, or GitHub Pro/Team for a private one.
2. Settings › Pages › Source: **GitHub Actions**. Custom domain: `www.linkclickdigital.com`, then Enforce HTTPS.
3. Settings › Secrets and variables › Actions › Variables: add `DEPLOY_PAGES` = `true`.
4. DNS at the registrar: apex A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`; AAAA `2606:50c0:8000::153` to `2606:50c0:8003::153`; `www` CNAME → `haidarj.github.io`.
   Leave the Google Workspace MX, SPF, DKIM and DMARC records as they are.

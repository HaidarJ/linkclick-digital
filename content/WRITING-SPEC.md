# Writing spec for the Astro build (Linkclick Digital)

Every page file in `site/src/content/` follows this spec. Read it fully before writing.

## Read first
1. `content/briefs/pages.md`: the brief for your pages (title, meta, H1, H2s, links, schema, compliance). Follow it.
2. `content/seo-strategy.md`: §2 query map, §3 architecture and linking rules, §4 brand-facts block (reuse its wording exactly where it fits).
3. `research/linkclick-market-research.md`: the only pre-checked source of statistics (each figure has its source in that file).
4. `mockup/homepage.html` (the `<main>` text): the approved voice. Match it.
5. `~/.claude/skills/seo-geo-content/references/on-page.md` and `geo-ai-citation.md`: the on-page rules (answer-first, quotable sentences, regulated sectors).

## Positioning (owner, 2026-11-10)
- **Linkclick Digital works with businesses worldwide in many industries, from healthcare to banking.** It is based in London. Use this wording (owner's choice) instead of "every industry" or "any industry". Use the full form, with "from healthcare to banking", once per page at most (the lede or the brand facts); elsewhere "many industries" or "businesses worldwide".
- **No industry pages and no sector lists.** "From healthcare to banking" is the only industry example to use; don't add others or write industry-specific sections.
- **Geography is worldwide.** Don't describe the market as "UK businesses" or "across the UK". "London" stays as where Linkclick Digital is based (and in title tags for local search). UK statistics may stay if they are labelled as UK data.
- **Rules and compliance:** keep it generic ("if your industry has advertising rules, every script, ad and page is checked against them before it goes live"). No rules or figures that belong to one industry.
- **Clients:** testimonial client names may stay; don't describe what industry they are in.
- **Audience wording:** "founder-led businesses" is fine.

## Hard rules
- **Never invent facts.** No made-up statistics, clients, results, quotes, prices, timelines, team members, tools, awards or credentials. A number needs a source you can link: take it from the research report (with its source URL) or a primary source you open and check yourself. If you can't source it, leave it out.
- **Client facts we don't have** go in as `[CLIENT TO CONFIRM: what is needed]`, used sparingly and only where the brief marks ★. Never guess them.
- **No Linkclick Digital prices** anywhere. Cost sections explain what drives the price, then point to the strategy call (budget bands are chosen on the contact form).
- **No guarantees** ("guaranteed rankings", "guaranteed tenants", returns, results).
- **Rules:** never name prescription-only medicines. No before/after promises, no return promises. When you describe a general advertising rule, link to the regulator's or platform's own page and only describe what it says.
- **AI and UGC stance:** human-led UGC; AI helps edit, caption and test faster; real people stay on camera; no AI actors standing in for real people.
- **Name:** always "Linkclick Digital", never "Linkclick" alone. UK English. "startups" as one word. "paid search" (not "Google Ads") as the service name; "Google Ads" is fine when talking about the platform.
- **No email address, phone number or street address** in copy. The one exception: info@linkclickdigital.com on the privacy and complaint policy pages, for data requests and complaints (owner, 2026-11-10). **Name no people** (founders, authors): the owner chose not to; bylines read "Linkclick Digital". Contact routes: "Book a strategy call" (`/contact/`) and WhatsApp (+44 7908 470600, already in the site chrome; don't repeat it in body copy).
- **Words to avoid:** elevate, unlock, unleash, seamless, supercharge, cutting-edge, next-gen, game-changer, leverage (as a verb), robust, "in today's fast-paced world", "look no further", "we're passionate about". No emoji. Avoid em dashes; use commas, colons or full stops.
- **Links:** markdown links with descriptive anchors and trailing slashes, only to URLs in the list below. Never "learn more", "read more" or "click here". Every page links to its hub (if it has one) and to `/contact/`.

## Valid internal URLs (nothing else exists)
`/` · `/services/` · `/services/ugc-content/` · `/services/digital-marketing/` · `/services/digital-marketing/paid-social/` · `/services/digital-marketing/paid-search/` · `/services/digital-marketing/seo-ai-search/` · `/services/digital-marketing/social-media-management/` · `/services/web-design/` · `/services/ai-automation/` · `/add-ons/` · `/insights/` · `/insights/get-recommended-by-chatgpt/` · `/insights/ugc-costs-uk/` · `/about/` · `/contact/` · `/privacy/` · `/terms/` · `/cookies/` · `/complaint-policy/`
(`/work/` and `/industries/` do not exist: don't link to them.)

## Copy shape
- **Lede** (frontmatter `lede`): 40–70 words under the H1. Says what this is and who it helps, naming "Linkclick Digital" (based in London, working worldwide).
- **Body:** `##` H2 sections in the brief's order. The first paragraph under each H2 is a self-contained direct answer of about 40–60 words that names the subject (it must still make sense if quoted alone). Then depth: specifics, steps, trade-offs. Use `###` for sub-items.
- Numbered lists only for real sequences (processes). Tables only for real comparisons. Short paragraphs (2–4 sentences). No filler intros or outros.
- Don't add a closing call-to-action section: the layout adds one. Don't put the FAQ in the body: it goes in frontmatter.
- One sentence, one claim. Prefer "Linkclick Digital …" or a concrete subject over "we" when a sentence states a fact worth quoting; "we" is fine elsewhere.

## Page file format
Markdown with YAML frontmatter. File path = URL: `site/src/content/pages/services/ugc-content.md` → `/services/ugc-content/`; an index page sits beside its folder (`pages/services.md` → `/services/`).

```yaml
---
title: "Human-Led UGC Agency in the UK | Linkclick Digital"   # from the brief; ≤ 60 characters
description: "…"          # from the brief; 120–160 characters
h1: "Human-led UGC and creator content for UK brands"
lede: "…"                 # 40–70 words
breadcrumb:               # excluding Home; the last item has no href
  - { label: "Services", href: "/services/" }
  - { label: "UGC and creator content" }
schema:
  type: Service           # Service | CollectionPage | WebPage | AboutPage
  serviceType: "User-generated content production"   # Service pages only
  audience: "Aesthetic clinics"                       # industry pages only
updated: 2026-11-10
faq:                      # the brief's FAQ plus the H2 questions that suit an FAQ; 3–6 items
  - q: "How long does a UGC project take?"
    a: "…"                # 40–80 words, plain text; markdown links allowed
related:                  # 2–4 next steps with descriptive labels (not the contact page)
  - { href: "/services/digital-marketing/paid-social/", label: "Run your UGC as Meta and TikTok ads" }
---
```

## Article file format (`site/src/content/insights/<slug>.md`)
```yaml
---
title: "…"                # ≤ 60 characters, ends "| Linkclick Digital"
description: "…"          # 120–160 characters
h1: "…"
lede: "…"                 # 40–70 words, answers the headline question directly
author: "[CLIENT TO CONFIRM: author name and role]"
published: 2026-11-10
updated: 2026-11-10
feeds: "/services/digital-marketing/seo-ai-search/"   # the page a reader should go to next
faq: []                   # optional, as above
---
```
Articles: 1,400–2,200 words, answer-first H2s, every statistic linked to its source in the sentence.

## Lengths (body, excluding frontmatter)
Index pages 120–250 words · hubs 900–1,400 · spokes 700–1,100 · industries 800–1,200 · add-ons 600–900 · about 500–800 · legal pages as needed.

## Before you finish
- Check every link is in the valid list; titles ≤ 60 characters; descriptions 120–160.
- Search your files for the banned words, "Linkclick " not followed by "Digital", em dashes, prices and any number without a source.
- Report: files written, word counts, every `[CLIENT TO CONFIRM]` you used, and every statistic with its source URL.

# Linkclick Digital: SEO + GEO content strategy

> **Positioning change (owner, 2026-11-10):** Linkclick Digital works with businesses worldwide in many industries, from healthcare to banking. The industry pages, the sector list and the clinic advertising article were removed; anything below that targets a named industry or the UK market is superseded. `content/WRITING-SPEC.md` (Positioning) has the current rules.


> Produced with the `seo-geo-content` skill for the website relaunch. Owns the words, URLs, headings,
> meta and schema; `design/DESIGN.md` owns the look. Page-level detail lives in `content/briefs/`.
> Last updated 2026-11-08.

## 1. Goal and principles

- **Goal:** be the page Google, Bing and AI assistants pick when a founder of a clinic, financial
  firm, property business or start-up in the UK looks for UGC, digital marketing, web design or AI
  automation help, and turn that visit into a booked strategy call.
- **How AI search works for us:** Google AI Overviews/AI Mode ground in Google's index; Copilot in
  Bing; ChatGPT and Perplexity run web searches. So the base is ordinary SEO (crawlable, fast,
  one intent per page, strong service pages), plus three things AI answers reward more:
  extractable answer-first passages, sourced specifics, and corroboration from other sites.
- **Rules we hold to:** one page = one intent; answer first; never invent facts (placeholders
  stay marked until the client confirms); name the entity consistently; compliance before
  keywords in regulated sectors.

## 2. Query clusters and page-to-query map

**Method:** Google UK autocomplete (en-GB) for about 110 seed queries; 20 google.co.uk results pages
read logged out on 2026-11-08; web search cross-check. **All volumes are unverified.** The current
site already ranks first for "linkclick digital", so ★ export the last 16 months of Search Console
data (UK) before launch and re-prioritise with real impressions.

| Page | Primary query | Secondary queries | Intent | What wins the SERP today | Local pack |
|---|---|---|---|---|---|
| `/` | digital marketing agency london | digital marketing company london; digital marketing agency for small business uk; linkclick digital | Transactional + brand | Agency homepages + directories | Yes |
| `/services/ugc-content/` | ugc agency uk | ugc agency london; ugc content agency uk; ugc creative agency; founder led content agency; short form video editing agency | Commercial | Agency service pages + one listicle; ~⅓ of results serve creators seeking work | No |
| `/services/digital-marketing/` | digital marketing services for small businesses | how much does a digital marketing agency cost; what does a digital marketing agency do; are digital marketing agencies worth it | Commercial | Mixed service pages and guides | Inherits |
| `…/paid-social/` | paid social agency london | paid social agency uk; paid social creative agency; meta ads agency; tiktok ads agency | Transactional | Service pages + listicles | Yes |
| `…/paid-search/` | google ads agency london | paid search agency london; ppc agency london; ppc management london; how much does google ads cost uk | Transactional | Service pages | Yes |
| `…/seo-ai-search/` | ai seo agency london | generative engine optimisation agency; ai search optimisation services; geo agency london; seo agency london | Transactional | Service pages + self-ranking listicles | Yes |
| `…/social-media-management/` | social media management agency london | social media agency london; social media management agency packages; how much does a social media manager cost in the uk | Transactional | Agency homepages + listicles | No |
| `/services/web-design/` | web design agency london | web design company london; website design london prices; how much does a website cost uk; landing page design | Transactional | Agency homepages + directories | No |
| `/services/ai-automation/` | ai automation agency london | ai automation agency uk; ai receptionist uk; ai appointment booking assistant; whatsapp ai chatbot; ai chatbot for website | Commercial | Agency pages; chatbot queries won by SaaS products | Yes |
| `/add-ons/` | none (conversion support) | brand identity design agency london; email marketing agency uk | Mixed | n/a | n/a |
| `/industries/aesthetic-clinics/` | aesthetic clinic marketing agency | aesthetic clinic marketing agency london; marketing agency for aesthetic clinics; seo for aesthetic clinics uk; social media marketing for aesthetic clinics; aesthetic clinic website design | Commercial | Specialist agency homepages + a listicle | Yes |
| `/industries/financial-services/` | financial services marketing agency uk | financial adviser marketing agency; marketing for financial planners; fca financial promotions social media | Commercial | Specialist homepages | Yes |
| `/industries/property/` | letting agent marketing agency | estate agent marketing agency; how to advertise hmo rooms; how to find tenants for hmo | Commercial (HMO terms informational) | Specialists; HMO queries won by OpenRent and forums | Yes |
| `/industries/startups/` | marketing agency for startups uk | digital marketing agency for startups; creative agency for startups; startup branding agency london | Commercial | Directories, consultancies, branding studios | Yes |
| `/about/`, `/contact/` | linkclick digital | linkclick digital reviews | Navigational | Brand SERP (also shows Link Click anime, link-click.app, Linkclick Media) | n/a |

URL changes: the Google Ads spoke is named **Paid search** (`…/paid-search/`, owner's call, 2026-11-09); it still targets "google ads agency london" because that is what people search. Searchers write **"startups"**, so the industry URL is
`/industries/startups/` and titles/H1s use "startups".

**Cornerstone Insights articles (launch set)**

| Article | Target queries | Why it's winnable | Feeds |
|---|---|---|---|
| How to get your business recommended by ChatGPT and Google AI Overviews | how to get your business recommended by chatgpt; how to get cited by chatgpt; how to appear in chatgpt search; seo vs geo | Fresh SERP (Sept–Oct 2026), small UK agencies rank; a video carousel shows, so pair with a founder video | `…/seo-ai-search/` |
| UGC costs in the UK (2026): creator rates vs agency pricing, and when human-led beats AI UGC | how much does ugc cost uk; ugc rates uk; is ugc worth it; do ai ugc ads work; ugc vs influencer | Results are creator rate cards and Reddit; nobody writes for the brand-side buyer | `/services/ugc-content/` |
| What aesthetic clinics can and can't post: ASA/CAP rules for Instagram, TikTok and Google Ads | can you advertise botox on instagram uk; asa botox advertising; aesthetic clinic social media | ASA ranks first but small specialists rank too; strong E-E-A-T fit | `/industries/aesthetic-clinics/` |

Reserve topic: FCA FG24/1 for advisers on social media (harder: FCA and law firms hold the SERP).

**Cannibalisation rules**
- Home owns "digital marketing agency london"; the digital marketing hub owns "services / small
  business / cost" queries.
- UGC owns ad creative and UGC ads; paid social owns media buying; social media management owns
  organic posting. Each links across.
- `…/seo-ai-search/` is transactional; the ChatGPT article is informational. They link to each other.
- `/industries/startups/` owns "startup branding agency london" (add-ons links to it).
- "aesthetic clinic website design" is a section on the aesthetics page linking to web design.
- Always write **"Linkclick Digital"**, never "Linkclick" alone, to separate the brand from the
  Link Click anime and two similarly named companies. Organization `sameAs` links do the same in schema.

**Do not target (wrong intent):** "ugc agency for creators", "ugc creator jobs", UGC NET, Roblox UGC;
"meta/tiktok ads agency account"; "ai automation agency course"; bare "hmo"; "london ontario";
"property marketing agency london" (photography/floor plans); "copywriting agency london" (jobs).

**Never target (compliance):**
- Aesthetics: botox, baby botox, anti-wrinkle or wrinkle-relaxing injections, toxin brand names,
  weight-loss injections (Mounjaro, Wegovy, "fat jabs"). Target the concern and the consultation.
  Only the informational rules article may name them, to explain the rules.
- Finance: guaranteed returns, best investments, finfluencer campaigns, crypto promotion terms.
- Property: guaranteed rent/tenants, "fill rooms in X days", "No DSS" and similar wording.
- Everywhere: "guaranteed first page", "#1 agency", unproven "GDPR-compliant AI".

**Listicle-heavy SERPs** (best UGC agency UK, web design London, AI SEO London, aesthetic clinic
marketing): get listed on Digital Agency Network, Semrush Agency Partners, The Manifest, Sortlist and
Clutch (§7) rather than publishing self-ranking lists.

**AI-visibility prompt set** (run monthly in ChatGPT, Perplexity, Gemini and Copilot; log whether
Linkclick Digital is named or cited, and which URL):
1. Which London agency can make UGC video for an aesthetics clinic?
2. Digital marketing agency in London for founder-led businesses
3. Who can set up an AI assistant to answer enquiries and book appointments for a UK clinic?
4. Marketing agency for financial advisers in the UK that understands FCA rules
5. Web design agency in London for clinics
6. Marketing agency for letting agents and HMO landlords in the UK
7. How do I get my business recommended by ChatGPT? (is the Insights article cited?)
8. What is Linkclick Digital? (entity check: are the facts right?)

## 3. Site architecture

Every important page is within three clicks of the home page. URLs are lowercase, hyphenated, with
a trailing slash on one host (`https://www.linkclickdigital.com/`).

```
/                                                    Home (entity + routes to hubs)
/services/                                           Services index (short intro, links to 4 hubs)
/services/ugc-content/                               Hub: UGC & creator content
/services/digital-marketing/                         Hub: Digital marketing (overview, links to 4 spokes)
/services/digital-marketing/paid-social/             Spoke: Meta and TikTok ads
/services/digital-marketing/paid-search/             Spoke: Paid search (Google Ads and other search ads)
/services/digital-marketing/seo-ai-search/           Spoke: SEO + AI search visibility (GEO)
/services/digital-marketing/social-media-management/ Spoke: social media management
/services/web-design/                                Hub: Web design
/services/ai-automation/                             Hub: AI automation
/add-ons/                                            Add-ons: brand identity, copywriting, email & SMS,
                                                     analytics & reporting, AI team training
/work/                                               Case studies index (goes live with ≥ 2 verified case studies)
/work/<client-slug>/                                 Case study
/insights/                                           Articles index
/insights/<slug>/                                    Cornerstone articles (3 at launch)
/about/                                              Entity page: brand facts, founders, how we work
/contact/                                            Book a strategy call + enquiry form (budget bands)
/privacy/  /cookies/  /complaint-policy/             Utility pages
```

Changes from the approved plan, made because the skill's rules call for them:
- **Digital marketing splits into a hub plus four spokes.** Paid social, paid search, SEO/AI search
  and social media management are four different searches with four different buyers. One page
  trying to rank for all four would rank for none (cannibalisation). The hub stays the "system"
  overview the homepage links to.
- **`/work/` launches only with real case studies.** Empty or placeholder case-study pages are
  thin content. The homepage no longer has a "Selected work" section (owner's call, 2026-11-09), and `/work/`
  is not published.
- **`llms.txt` is optional, not a launch task.** Google says its AI features don't use it, and
  server-log studies show AI crawlers barely request it. It costs 15 minutes, so we can add an
  accurate one later if wanted, mirroring the brand-facts block.

### Internal linking rules for this site
- Home → every hub (pillar rows), every industry (sector list), contact (CTAs).
- Each hub → its spokes, the 2 most relevant industries, its best case study, 1–2 insights, contact.
- Each spoke → its hub, 1–2 sibling spokes, the industries where it matters most, contact.
- Each industry → the services that apply (with sector-specific anchors, e.g. "UGC for aesthetic
  clinics" → `/services/ugc-content/`), its case study, its insight article, contact.
- Each insight → the matching hub or spoke where a reader would want help, plus one industry page.
- Footer: hubs, industries, about, contact, legal; brand-facts summary (NAP).
- All links are plain `<a href>` with descriptive anchors (no "learn more" / "read more").

### Breadcrumbs
Visible on every page below home, e.g. `Home › Services › Digital marketing › Paid search`, with
matching `BreadcrumbList` JSON-LD.

## 4. Brand-facts block (canonical; reuse word for word)

Use this exact wording on `/about/`, condensed in the footer, in directory listings (Google Business
Profile, Clutch, LinkedIn, Companies House-linked profiles), social bios and press boilerplate. Items
marked ★ need the client to confirm before launch; until then they stay out of the live site and
schema rather than being guessed.

```markdown
**Linkclick Digital** is a London-based digital agency that turns attention into booked calls for
businesses worldwide in many industries, from healthcare to banking: UGC and creator content, digital marketing, web design and
AI automation. Incorporated in September 2017.

- Services: UGC & creator content; digital marketing (paid social, paid search, SEO and AI search,
  social media management); web design; AI automation
- Add-ons: brand identity, copywriting, email & SMS, analytics & reporting, AI team training
- Industries: many, from healthcare to banking; clients worldwide (based in London)
- Clients include: Harley Street Dermal, Embassy Capital, HMO Property Licencing, OTTOLUBE, LIPS (★ confirm permission to name)
- Notable result: [★ one verified result with number, timeframe and client]
- Registered: [★ legal name] Ltd, company no. [★], VAT [★ if registered]
- Based in: London, UK [★ full address only if a Google Business Profile is set up]
- Contact: WhatsApp +44 7908 470600 · https://www.linkclickdigital.com/ · info@linkclickdigital.com for data requests and complaints only
- People: no founder or staff names on the site (owner's choice, 2026-11-10)
- Social: instagram.com/linkclick_digital [★ LinkedIn, TikTok, YouTube if any]
- Last reviewed: 2026-11-08
```

**One-line descriptor (use everywhere):** "London digital agency for UGC, digital marketing, web design
and AI automation."

## 5. Redirect map (old WordPress site → new site)

The old site's WordPress sitemaps list four pages and one post. Cross-check against Search Console's
top pages and links report before launch, in case anything else earns traffic or links ★.

| Old URL | What it is | New URL | Status |
|---|---|---|---|
| `/` | Home | `/` | Same |
| `/complaint-policy/` | Complaint policy | `/complaint-policy/` | Same path, content ported |
| `/289-2/` | "Marketing Services" page (PPC and paid social) | `/services/digital-marketing/` | 301 |
| `/our-blog/` | Blog index | `/insights/` | 301 |
| `/at-2019-golden-globes-amazon-doesnt-have-the-prime-night-it-hoped-for/2019/entertainment/` | Leftover theme demo post, unrelated to the business | none | 410 Gone (a redirect to unrelated content is treated as a soft 404) |
| `/category/*`, `/tag/*`, `/author/*` | WordPress archives | `/insights/` | 301 |
| `http://` and non-`www` variants | | `https://www.linkclickdigital.com/…` | 301, one hop |

## 6. Technical SEO for the build

- Static HTML from Astro: every word in the initial HTML (AI crawlers don't run JavaScript). FAQ
  answers are in the HTML on load (`<details>`), not fetched.
- `<html lang="en-GB">`, one H1 per page, headings in order, descriptive alt text.
- Self-referencing absolute canonical on every page. XML sitemap of canonical 200 URLs with honest
  `lastmod`, referenced in `robots.txt`.
- `robots.txt` allows search and AI search crawlers (Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User,
  PerplexityBot, ClaudeBot/Claude-SearchBot). Training-only crawlers (e.g. GPTBot, Google-Extended)
  are the client's call ★: blocking them doesn't affect search visibility.
- JSON-LD per page type: home = Organization/ProfessionalService + WebSite; hubs and spokes =
  Service + WebPage + BreadcrumbList (+ FAQPage for visible FAQs); industries = Service with
  `audience` + BreadcrumbList; articles = BlogPosting + Person + BreadcrumbList; about = AboutPage +
  Organization + Person.
- Core Web Vitals on mobile: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms (shared budget with DESIGN.md).
- Visible "Last updated" date on articles and hubs, matched by `dateModified`.
- Run `node ~/.claude/skills/seo-geo-content/scripts/seo_check.mjs dist/` before launch (orphans,
  duplicates, canonicals, headings, schema).

## 7. Off-site corroboration (the GEO work that happens away from the site)

AI assistants recommend brands that other sources describe consistently. Launch list ★:
1. Google Business Profile (if eligible as a service-area business in London), using the brand-facts wording.
2. LinkedIn company page and founder profiles, same descriptor.
3. Clutch / DesignRush / Sortlist / The Manifest profiles with the same services and sectors.
4. Reviews from the five existing clients on Google and Clutch (genuine, not incentivised; DMCC Act).
5. Two or three guest articles or podcast spots in sector media (aesthetics, finance, property).
6. Instagram and TikTok bios updated to the descriptor; link to the site.

## 8. Measurement

- Search Console + Bing Webmaster Tools verified before launch; submit the sitemap; IndexNow on publish.
- GA4 with an "AI assistant" referrer channel (chatgpt.com, perplexity.ai, copilot.microsoft.com,
  gemini.google.com, claude.ai).
- Conversion: strategy-call bookings and enquiry-form submissions, attributed by landing page.
- **Monthly AI-visibility prompt set** (run in ChatGPT, Perplexity, Gemini, Copilot; log whether
  Linkclick is named or cited, and which URL): see §2 for the list per page.

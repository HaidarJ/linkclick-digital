# Content brief: Home

> **Positioning change (owner, 2026-11-10):** Linkclick Digital works with businesses in every industry and vertical, worldwide. The industry pages, the sector list and the clinic advertising article were removed; anything below that targets a named industry or the UK market is superseded. `content/WRITING-SPEC.md` (Positioning) has the current rules.


> One brief per URL, from `~/.claude/skills/seo-geo-content/templates/content-brief.md`.
> ★ = needs the client; never invented. Strategy and query evidence: `content/seo-strategy.md`.

## 1. Basics
- **URL**: `/` (existing; same URL)
- **Page type**: home
- **Hub it belongs to**: n/a (routes to all hubs)
- **Owner / reviewer**: Claude (copy) · ★ Linkclick founder (facts) · ★ compliance review not needed for the home page beyond sector claims
- **Status / dates**: copy drafted 2026-11-08 in `mockup/homepage.html` · publish with the relaunch · review quarterly

## 2. Search intent
- **Primary query**: digital marketing agency london (volume: unverified)
- **Secondary queries**: digital marketing company london; digital marketing agency for small business uk; linkclick digital (brand)
- **Intent**: transactional + navigational
- **The job behind the search**: "Find a London agency I can trust to get my business more enquiries, without managing four suppliers."
- **Who is searching**: founder or owner of a clinic, financial firm, property business or startup; probably on a phone; burned by an agency before or never hired one; worried about cost, lock-in and compliance.
- **SERP shape today**: agency homepages (found.co.uk, thegoodmarketer.co.uk, ink-digital.co.uk) + directories (Digital Agency Network, Semrush Agencies); local pack shows; listicles where agencies rank themselves first.
- **What the top results miss (our angle)**: they list channels. Nobody explains how content, ads, the website and enquiry handling connect, or speaks to regulated founders. Our angle: one connected system "from first view to booked call", human-led UGC, compliance built in.
- **AI-answer check**: ★ run prompts 2 and 8 from the strategy's prompt set before launch and log the baseline.

## 3. Entities and facts
- **Main entity**: Linkclick Digital (always the full name)
- **Brand naming**: "Linkclick Digital, a London digital agency for UGC, digital marketing, web design and AI automation" (brand-facts block, `seo-strategy.md` §4)
- **Related entities to name**: London; UK; Instagram, TikTok, Reels, Shorts; Meta; Google (paid search); Google AI Overviews; ChatGPT; WhatsApp; ASA; CAP Code; MHRA; FCA; FG24/1; clinics and aesthetics, financial services, property, startups
- **Proof points ★**: five real testimonials (confirm permission and wording); ★ one case-study result with number + timeframe for future case-study pages (the homepage "Selected work" section was removed, 2026-11-09)
- **Original data or first-hand experience ★**: ★ how many UGC videos / campaigns / sites delivered; ★ typical turnaround; ★ founder quote on why they built the system
- **Statistics to cite** (used in FAQ answers):
  - Organic search ≈ 42.75% of website visits vs ≈ 0.32% from AI chatbots in 2026 – SE Ranking, 101k sites – https://seranking.com/blog/ai-traffic-research-study/
  - Most UK adults who have seen AI-generated actors in ads dislike them; acceptance lowest for health (6%) and financial (7%) claims – YouGov, July 2026 – https://yougov.com/en-gb/articles/55180-half-of-britons-have-seen-ai-generated-actors-in-ads-and-they-dont-like-them
- **Compliance constraints**: no POM names (Botox etc.) except when stating the rule; no outcome guarantees ("guaranteed", "#1"); no invented results; testimonials real and unedited in meaning (DMCC Act).

## 4. Questions to answer (answer-first)
Visible FAQ, each a ~40–60-word direct answer that names Linkclick Digital:
1. What does a digital marketing agency do? (PAA)
2. How much does a digital marketing agency cost? (PAA + AC) — no prices by client decision; explain drivers and the budget-band step
3. Is it worth hiring a marketing agency? (AC)
4. How do I get AI assistants like ChatGPT to recommend my business? (AC "how to make AI recommend your business")
5. Can AI book appointments for my business? (PAA "Can AI book appointments?")
6. Does UGC work for regulated businesses like clinics and financial firms? (sales question; regulated angle)
7. Do you use AI-generated actors or avatars? (PAA "Do AI UGC ads work?")

## 5. Outline
- **Title tag** (51 chars): `Digital Marketing Agency London | Linkclick Digital`
- **Meta description** (146 chars): `London digital marketing agency for founder-led UK businesses: UGC and creator content, paid social, paid search, SEO, web design and AI automation.`
- **H1** (one element, two parts; owner's direction with the hook-book skill, 2026-11-10): hook line "Data-driven, AI-powered [web design]." (the linked words rotate every 2s through web design, digital marketing, UGC and automation; crawlers and screen readers read "Data-driven, AI-powered web design, digital marketing, UGC and AI automation.") + line 2 "A London team for founder-led UK businesses. Real numbers set the plan. AI speeds up the work." (who, where, how)
- ~~**Intro (first 100 words)**~~ Hero intro paragraph and client strip removed at the owner's request (2026-11-10). The H1 and line 2 now carry what, for whom and where; the services intro below names all four services.
- ~~**H2** Trusted by founders at (client names)~~ Removed at the owner's request (2026-11-10); client names appear with the testimonials only (★ permission still needed)
- **H2** Most growth problems sit between the pieces. (why one system)
- **H2** Core services. One growth system. (owner's wording, 2026-11-10) (answer-first intro naming Linkclick Digital + four H3 rows, each linking to its hub with a descriptive anchor)
  - **H3** UGC & creator content → `/services/ugc-content/`
  - **H3** Digital marketing → `/services/digital-marketing/` (names the four spokes)
  - **H3** Web design → `/services/web-design/`
  - **H3** AI automation → `/services/ai-automation/`
- **H2** Built for businesses where trust decides the sale (four sectors linking to `/industries/…`, compliance note)
- **H2** How we work (numbered: strategy call → growth plan → monthly retainer; ★ confirm call length and terms)
- **H2** Pairs well with (add-ons, quiet, link to `/add-ons/`)
- **H2** What founders say (five testimonials)
- **H2** Questions founders ask (FAQ above)
- **H2** Show us where your path breaks. (CTA)
- **CTA**: "Book a strategy call" (primary everywhere) + "Chat on WhatsApp" (wa.me/447908470600) in the header, hero, menu, closing section, footer and the mobile sticky bar; reassurance: "30-minute call" ★. No email address on the site.
- **Target length**: ~900–1,200 words of HTML text; no padding

## 6. Schema
- **Types**: `@graph` with Organization + ProfessionalService (`["Organization","ProfessionalService"]`), WebSite, WebPage; FAQPage for the visible FAQ
- **@id references**: `https://www.linkclickdigital.com/#organization`, `#website`
- **Omit until confirmed ★**: foundingDate, founder, telephone, streetAddress, postcode, legalName, company number, VAT, extra `sameAs`
- **Dates**: WebPage `dateModified` = publish date

## 7. Internal links
- **Out**: four hubs (descriptive anchors: "How we make UGC", "How we run digital marketing", "How we design websites", "How our AI automation works"); four industry pages (sector names as links); `/add-ons/`; `/work/` (when live); `/contact/` (CTAs); `/about/` (nav)
- **In**: every page via logo and breadcrumb "Home"; footer

## 8. Media
- **Images**: none required on the homepage at launch.
- **Video**: ★ 15–30s founder or creator reel → `VideoObject` when real.

## 9. Measurement
- **Prompts**: strategy prompt set #2 and #8
- **Success signals**: impressions and position for "digital marketing agency london" and brand; strategy-call bookings from `/`; AI mentions for prompt #2

## 10. Sign-off checklist
- [ ] ★ items supplied (testimonial permissions, process terms, brand facts)
- [x] Every statistic sourced (SE Ranking, YouGov) with links
- [ ] Compliance review of sector lines (aesthetics, finance) ★
- [x] Title, H1 and meta aligned and unique
- [ ] Schema validated on the built page; `seo_check.mjs` passes on `dist/`
- [x] Links to all hubs and industries

## Facts to verify
- [CLIENT TO CONFIRM] Permission to name Harley Street Dermal, Embassy Capital, HMO Property Licencing, OTTOLUBE and LIPS, and the exact testimonial wording. Three quotes are trimmed for length only (Marwa A., E Issa, John W.); wording is otherwise verbatim from the current site.
- [CLIENT TO CONFIRM] Strategy call is 30 minutes; growth plan then monthly retainer; any minimum term.
- [CLIENT TO CONFIRM] Scripts are checked against ASA/CAP rules before publishing (stated in the UGC row) and a person stays in the loop for sensitive AI conversations.
- [CLIENT TO CONFIRM] "Based in London"; service area UK-wide.
- [CLIENT TO CONFIRM] +44 7908 470600 is the number to publish (WhatsApp, and as `telephone` in the schema).

## Compliance flags
- The FAQ names Botox only to state the rule (prescription-only medicines can't be advertised to the public). Keep that phrasing; don't turn it into a service claim.
- Financial-services line references FCA rules and FG24/1 descriptively; no promise of compliance outcomes. The "We are not a law firm…" note stays.

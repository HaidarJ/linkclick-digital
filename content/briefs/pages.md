# Content briefs: all pages below the home page

> **Positioning change (owner, 2026-11-10):** Linkclick Digital works with businesses in every industry and vertical, worldwide. The industry pages, the sector list and the clinic advertising article were removed; anything below that targets a named industry or the UK market is superseded. `content/WRITING-SPEC.md` (Positioning) has the current rules.


> Compact briefs, one per URL, following the skill's template. Each expands to a full brief
> (`templates/content-brief.md`) when its copy is written during the Astro build. Query evidence:
> `content/seo-strategy.md` §2. ★ = needs the client; never invented.
>
> **Shared rules for every page:**
> - **Name and wording:** always "Linkclick Digital" (never "Linkclick" alone); UK English;
>   "startups" (one word). Never put a phone or address on the page until it is confirmed ★.
> - **Copy shape:** answer-first H2s (a self-contained direct answer of about 40–60 words that
>   names the subject), then depth, then evidence.
> - **Proof:** never invented; missing proof stays `[CLIENT TO CONFIRM]`.
> - **On every page:** a visible breadcrumb with `BreadcrumbList`; one H1; "Book a strategy call"
>   as the primary CTA.
> - **Links:** descriptive anchors only. Every page links to its hub and to `/contact/`.
> - **Compliance:** the never-target list in the strategy applies to every page.

---

## /services/ (services index)
- **Type:** index · **Primary:** n/a (navigation) · **Title:** `Digital Agency Services in London | Linkclick Digital`
- **Meta:** `Four connected services from Linkclick Digital in London: UGC and creator content, digital marketing, web design and AI automation, plus add-ons.`
- **H1:** Our services
- **Content:** a 60-word intro naming the system, then four short rows linking to the hubs, plus one line linking to `/add-ons/`.
- **Schema:** CollectionPage + BreadcrumbList

## /services/ugc-content/ (hub)
- **Primary:** ugc agency uk · **Secondary:** ugc agency london; ugc content agency uk; ugc creative agency; founder led content agency; short form video editing agency
- **Intent:** commercial · **SERP:** agency service pages plus one listicle; about a third of results target creators looking for work, so state "for brands" early
- **Title:** `Human-Led UGC Agency in the UK | Linkclick Digital` (50)
- **Meta:** `London UGC agency making human-led creator and customer videos for clinics, finance, property and startups, with scripts checked against ASA/CAP rules.`
- **H1:** Human-led UGC and creator content for UK brands
- **H2s (answer-first):**
  - What does a UGC agency do?
  - What's included (H3s: customer and creator UGC; founder-led video; short-form editing; ad creative variations). These sub-services have no results page of their own, so they stay as H3s here.
  - How a UGC project runs, step by step (numbered)
  - How much does UGC content cost in the UK? (price drivers: usage rights, number of hooks and edits, creator credentials, turnaround; no Linkclick prices; link to the cost article)
  - Is UGC worth it?
  - Do AI UGC ads work? (state the human-led position; cite YouGov 2026)
  - UGC vs influencer marketing
  - UGC for regulated businesses (links to the aesthetics and finance pages)
- **Proof ★:** a UGC case study with a metric (e.g. cost per enquiry before and after, period); 2–3 real reels with permission
- **FAQ:** Which UGC agency is the best? (answer by criteria, not self-ranking) · How long does a UGC project take? ★ · Who owns the content and usage rights? ★
- **Links:** out → paid social ("run your UGC as Meta and TikTok ads"), aesthetic clinics, financial services, UGC cost article, contact · in ← home, digital marketing hub, paid social, aesthetics, startups, UGC cost article
- **Schema:** Service (`serviceType` "User-generated content production", provider `#organization`, `areaServed` GB) + BreadcrumbList + FAQPage (+ VideoObject per real reel)
- **Compliance:** no POM names or results claims in example scripts; creators disclose paid partnerships (#ad), per ASA/CMA influencer guidance

## /services/digital-marketing/ (hub)
- **Primary:** digital marketing services for small businesses · **Secondary:** how much does a digital marketing agency cost; what does a digital marketing agency do; are digital marketing agencies worth it
- **Title:** `Small Business Digital Marketing Services | Linkclick Digital` (61)
- **Meta:** `Paid social, paid search, SEO and AI search, and social media management from one London team, measured on booked calls and enquiries, not likes.`
- **H1:** Digital marketing that turns attention into enquiries
- **H2s:**
  - What does a digital marketing agency do?
  - The four channels we run (H3 each with a link to its spoke)
  - How much does a digital marketing agency cost? (drivers; no prices; budget bands on the contact form)
  - Are digital marketing agencies worth it?
  - Meta ads vs Google Ads: which is better? (comparison table by situation)
  - One plan, one report (what's measured)
- **Links:** out → the 4 spokes, UGC hub, web design, contact · in ← home, all 4 spokes, `/289-2/` redirect
- **Schema:** Service + BreadcrumbList + FAQPage

## /services/digital-marketing/paid-social/ (spoke)
- **Primary:** paid social agency london · **Secondary:** paid social agency uk; paid social creative agency; meta ads agency; tiktok ads agency
- **Title:** `Paid Social Agency London | Linkclick Digital` · **H1:** Paid social advertising on Meta and TikTok
- **Meta:** `Meta and TikTok ads run by a London paid social agency, with human-led UGC creative tested every month and reporting on booked calls, not clicks.`
- **H2s:**
  - What does a paid social agency do?
  - Why creative now drives results on Meta (cite Meta's guidance on creative diversification ★ [VERIFY primary source])
  - Is TikTok ads or Meta ads better?
  - How we test creative (numbered)
  - What paid social costs (ad spend vs management; drivers)
  - Ad rules for clinics and financial firms
- **Links:** hub, UGC hub ("UGC ad creative"), paid search, aesthetics, contact
- **Schema:** Service + BreadcrumbList + FAQPage · **Compliance:** platform policies on health and finance ads; no POMs

## /services/digital-marketing/paid-search/ (spoke, named "Paid search" by the owner)
- **Primary:** google ads agency london · **Secondary:** ppc agency london; ppc management london; how much does google ads cost uk
- **Title:** `Paid Search & Google Ads Agency London | Linkclick Digital` · **H1:** Paid search for founder-led businesses
- **Meta:** `Paid search and Google Ads management from a London agency: search campaigns, landing pages and tracking set up to bring qualified enquiries, not just clicks.`
- **H2s:**
  - What does a paid search (Google Ads) agency do?
  - How much does Google Ads cost in the UK? (drivers; [VERIFY] any CPC ranges cited)
  - How much should I pay someone to manage my Google Ads?
  - Healthcare and financial services ad policies
  - Landing pages that convert (link to web design)
- **Links:** hub, web design, SEO and AI search, contact · **Schema:** Service + BreadcrumbList + FAQPage

## /services/digital-marketing/seo-ai-search/ (spoke)
- **Primary:** ai seo agency london · **Secondary:** generative engine optimisation agency; ai search optimisation services; geo agency london; seo agency london
- **Title:** `AI SEO Agency London: SEO and GEO | Linkclick Digital` (53) · **H1:** SEO and AI search visibility (GEO)
- **Meta:** `SEO and AI search visibility from a London agency: get found on Google and recommended in AI Overviews, ChatGPT and Perplexity, measured monthly.`
- **H2s:**
  - What is the difference between SEO and GEO? (answer-first; Google treats GEO as SEO; cite Google's May 2026 guidance [VERIFY link])
  - How AI assistants choose which businesses to name (entity consistency, corroboration, citable pages)
  - What's included (technical SEO, content, local SEO and Google Business Profile, entity work, AI-visibility tracking)
  - How much does AI SEO cost? (drivers)
  - How we measure AI visibility (the monthly prompt set; Search Console and Bing)
- **Proof ★:** AI-citation or ranking result for a client
- **Links:** hub, ChatGPT article (informational), web design, contact · **Schema:** Service + BreadcrumbList + FAQPage
- **Avoid:** promising rankings or citations ("guaranteed first page")

## /services/digital-marketing/social-media-management/ (spoke)
- **Primary:** social media management agency london · **Secondary:** social media agency london; social media management agency packages; how much does a social media manager cost in the uk
- **Title:** `Social Media Management Agency London | Linkclick Digital` (57) · **H1:** Social media management for founder-led brands
- **Meta:** `Organic social media management in London: content calendars, posting, community replies and reporting, built around human-led UGC.`
- **H2s:**
  - What does a social media management agency do?
  - What's included
  - How much does a social media manager cost in the UK? (drivers; [VERIFY] if citing market ranges)
  - Organic, paid and UGC: which page does what (links across)
- **Links:** hub, UGC hub, paid social, AI automation ("auto-reply to DMs"), contact · **Schema:** Service + BreadcrumbList + FAQPage

## /services/web-design/ (hub)
- **Primary:** web design agency london · **Secondary:** web design company london; website design london prices; how much does a website cost uk; landing page design
- **Title:** `Web Design Agency London | Linkclick Digital` · **H1:** Web design that turns visits into enquiries
- **Meta:** `London web design agency building fast, mobile-first websites and landing pages for clinics, financial firms, property businesses and startups.`
- **H2s:**
  - How much does a website cost for a small business in the UK? (drivers; no prices)
  - How long does it take to build a website? ★ typical timeline
  - What makes a good landing page?
  - Built for Google and AI assistants (static HTML, schema, speed)
  - Mobile-first by default
  - How a website project runs (numbered)
- **Proof ★:** before/after metrics from a client site (e.g. enquiry rate, Core Web Vitals) and screenshots
- **Links:** SEO and AI search, AI automation ("connect your enquiry form to AI follow-up"), aesthetics ("aesthetic clinic website design"), contact
- **Schema:** Service + BreadcrumbList + FAQPage

## /services/ai-automation/ (hub)
- **Primary:** ai automation agency london · **Secondary:** ai automation agency uk; ai receptionist uk; ai appointment booking assistant; whatsapp ai chatbot; ai chatbot for website
- **Title:** `AI Automation Agency London | Linkclick Digital` · **H1:** AI automation that answers and books every enquiry
- **Meta:** `AI assistants that answer enquiries on your website, Instagram and WhatsApp, book appointments and follow up, with your team kept in the loop.`
- **H2s:**
  - What does an AI automation agency do?
  - Can AI book appointments?
  - AI receptionist and chat assistants for your website, Instagram and WhatsApp
  - Keeping a person in the loop (sensitive topics, handover rules)
  - Data protection (★ describe the actual set-up: processors, data processing agreements, where data is stored. **No "GDPR-compliant AI" claim** unless the client can show it.)
  - How much do AI automation agencies charge? (build plus running costs as drivers)
  - What we connect (calendars, CRMs ★ list real tools)
- **Proof ★:** response-time or booking-rate result, anonymised flow recording
- **Links:** web design, social media management, aesthetics, property, contact · **Schema:** Service + BreadcrumbList + FAQPage
- **Note:** chatbot SERPs are won by SaaS products. Position this page as a done-for-you service, not a tool.

## /add-ons/
- **Primary:** none (supports conversion) · **Secondary:** brand identity design agency london; email marketing agency uk
- **Title:** `Brand, Copy, Email & AI Training Add-ons | Linkclick Digital` (60) · **H1:** Add-ons that pair with our core services
- **Meta:** `Brand identity, copywriting, email and SMS, analytics and reporting, and AI team training, available alongside Linkclick Digital's core services.`
- **H2 per add-on:** brand identity; copywriting; email and SMS; analytics and reporting; AI team training. For each: what it is, when it helps, which core service it pairs with.
- **Links:** startups page (owns "startup branding agency london"), the relevant hubs, contact · **Schema:** WebPage + BreadcrumbList (+ ItemList of Services)

## /industries/aesthetic-clinics/
- **Primary:** aesthetic clinic marketing agency · **Secondary:** aesthetic clinic marketing agency london; marketing agency for aesthetic clinics; seo for aesthetic clinics uk; social media marketing for aesthetic clinics; aesthetic clinic website design
- **Title:** `Aesthetic Clinic Marketing Agency London | Linkclick Digital` (60) · **H1:** Marketing for aesthetic clinics, within the rules
- **Meta:** `Patient-first UGC, ads, websites and AI booking for UK aesthetic clinics, planned around ASA, CAP and MHRA rules on prescription-only treatments.`
- **H2s:**
  - What can aesthetic clinics advertise on social media? (summary; links to the rules article)
  - Patient-first UGC that builds trust
  - Social media marketing for aesthetic clinics
  - SEO and paid search for clinics
  - Aesthetic clinic website design
  - AI that answers enquiries and books consultations
- **Proof ★:** Harley Street Dermal case study with permission and a metric
- **Compliance flags (★ client compliance review):** no POM names or indirect references in service copy; no before/after imagery; no time-limited offers on procedures; list practitioner registrations only for clients, not for Linkclick
- **Links:** UGC, paid social, web design, AI automation, rules article, contact · **Schema:** Service with `audience` (BusinessAudience: aesthetic clinics) + BreadcrumbList + FAQPage

## /industries/financial-services/
- **Primary:** financial services marketing agency uk · **Secondary:** financial adviser marketing agency; marketing for financial planners; fca financial promotions social media
- **Title:** `Financial Services Marketing Agency UK | Linkclick Digital` (58) · **H1:** Marketing for financial services firms and advisers
- **Meta:** `Founder and adviser content, ads, websites and SEO for UK financial firms, shaped around FCA financial promotion rules and FG24/1 social media guidance.`
- **H2s:**
  - What do the FCA rules mean for social media marketing? (FG24/1, fair-clear-not-misleading; link to the FCA source)
  - Founder and adviser-led content
  - Ads for financial services (platform policies, authorisation checks)
  - Websites and SEO for advisers and planners
- **Proof ★:** Embassy Capital case study (permission, metric)
- **Compliance flags:** no return promises; promotions approved by an authorised person where required (s21 FSMA); client compliance sign-off on every asset; avoid "finfluencer campaign" wording
- **Links:** UGC, paid social, SEO and AI search, contact · **Schema:** Service with `audience` + BreadcrumbList + FAQPage

## /industries/property/
- **Primary:** letting agent marketing agency · **Secondary:** estate agent marketing agency; how to advertise hmo rooms; how to find tenants for hmo
- **Title:** `Letting & Estate Agent Marketing Agency | Linkclick Digital` (59) · **H1:** Marketing for letting agents, HMO and property businesses
- **Meta:** `Local SEO, video, ads, websites and AI enquiry handling for UK letting agents, HMO landlords and property licensing businesses.`
- **H2s:**
  - How to advertise HMO rooms (answer-first, practical)
  - How to find tenants for an HMO
  - Local SEO and Google Business Profile for letting agents
  - Video tours and UGC for property
  - AI that answers viewing requests
- **Proof ★:** HMO Property Licencing case study
- **Compliance flags:** material information (price, tenure, council tax) in listings; no "guaranteed rent/tenants"; check discriminatory wording against the Renters' Rights Act 2025 ★
- **Links:** web design, AI automation, SEO and AI search, contact · **Schema:** Service with `audience` + BreadcrumbList + FAQPage

## /industries/startups/
- **Primary:** marketing agency for startups uk · **Secondary:** digital marketing agency for startups; creative agency for startups; startup branding agency london
- **Title:** `Marketing Agency for Startups UK | Linkclick Digital` (52) · **H1:** Marketing for founder-led startups
- **Meta:** `Brand, launch content, a website that converts and the systems to handle demand, from a London agency that works with founder-led startups.`
- **H2s:**
  - What should a startup spend on marketing first?
  - Startup branding (link to add-ons)
  - Launch content and founder-led video
  - A website that converts from day one
  - Systems that handle demand (AI automation)
- **Proof ★:** LIPS or OTTOLUBE case study (★ confirm their sectors and permission)
- **Links:** add-ons, UGC, web design, AI automation, contact · **Schema:** Service with `audience` + BreadcrumbList + FAQPage

## /work/ and /work/<client-slug>/
- **Live only with ≥ 2 verified case studies.**
- **Title:** `Client Work and Case Studies | Linkclick Digital`
- **Each case study:** client · sector · problem · constraints (incl. compliance) · what we did (services, linked to hubs) · results with numbers, timeframe and how they were measured · client quote (real, with permission) · real media
- **Schema:** Article (or CreativeWork) + BreadcrumbList (+ VideoObject)

## /insights/ and the three cornerstone articles
Each article has:
- a byline linked to an author page (★ real person, real photo) and a visible "Last updated" date matching `dateModified`
- answer-first H2s and sourced statistics
- a link to the hub or page it feeds

Schema: BlogPosting + Person + BreadcrumbList.

1. **`/insights/get-recommended-by-chatgpt/`**
   - Target: how to get your business recommended by chatgpt; how to get cited by chatgpt; how to appear in chatgpt search; seo vs geo
   - H2s:
     - How ChatGPT, Perplexity and AI Overviews pick sources
     - The difference between SEO and GEO
     - Make your business one clear entity
     - Write pages AI can quote
     - Get mentioned on other sites
     - What doesn't work (llms.txt, AI-only pages, fake reviews)
     - How to check whether AI recommends you
   - Pair with a founder video (a video carousel shows on this SERP). Feeds `…/seo-ai-search/`.
2. **`/insights/ugc-costs-uk/`**
   - Target: how much does ugc cost uk; ugc rates uk; is ugc worth it; do ai ugc ads work; ugc vs influencer
   - Written for the brand-side buyer (the gap in the SERP)
   - H2s:
     - What UGC costs in the UK in 2026 (cite creator-rate sources with dates, [VERIFY] each)
     - What drives the price
     - Creator vs agency
     - Is UGC worth it?
     - Human-led vs AI UGC (YouGov)
     - UGC vs influencer marketing
   - Feeds `/services/ugc-content/`.
3. **`/insights/aesthetic-clinic-advertising-rules/`**
   - Target: can you advertise botox on instagram uk; asa botox advertising; aesthetic clinic social media
   - The only page allowed to name POMs, and only to explain the rules. Link the ASA/CAP sources.
   - Reviewed by ★ a named compliance or clinical reviewer if available.
   - Feeds `/industries/aesthetic-clinics/`.

## /about/
- **Primary:** linkclick digital (brand) · **Title:** `About Linkclick Digital, a London Digital Agency` · **H1:** About Linkclick Digital
- **Meta:** `Who Linkclick Digital is, who founded it, how the team works and the businesses it serves across London and the UK.`
- **Content:**
  - the brand-facts block word for word
  - founders ★ (bios, real photos, LinkedIn)
  - how we work and why the four services are joined up
  - who we work with
  - registrations ★ (company number, VAT) and editorial transparency (how AI is used and checked)
- **Schema:** AboutPage + Organization (`#organization`) + Person per founder

## /contact/
- **Title:** `Book a Strategy Call | Linkclick Digital` · **H1:** Book a strategy call
- **Meta:** `Book a 30-minute strategy call with Linkclick Digital, or send an enquiry. Tell us your goals and budget range and we'll reply within one working day.` (★ confirm call length and reply time)
- **Form:**
  - name, work email, phone (optional), business name, website, sector (select)
  - monthly budget band (select; ★ client sets the bands)
  - message
  - privacy consent
  - honeypot
- **Also on the page:** "Chat on WhatsApp" (wa.me/447908470600); ★ booking link embed (load on click); London, UK. No email address; no street address until confirmed
- **Schema:** ContactPage + BreadcrumbList

## /privacy/, /cookies/, /complaint-policy/
- **Indexable, low prominence (footer links).** `/complaint-policy/` keeps its old URL with the content ported. Privacy and cookies need ★ client details (data controller, processors for forms, booking and analytics).

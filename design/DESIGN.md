# Linkclick Digital design direction

> Source of truth for the relaunch's look and feel. Produced with the `premium-frontend` skill process
> (subject → direction → default check → build → critique). Tokens live in `design/tokens.css`.
> Last updated 2026-11-10 (art layer v5: one figure per section).

## 1. Subject
- **What it is (plain words):** A London digital agency that builds one connected growth system for
  founder-led businesses: creator/UGC content people trust, digital marketing that gets it seen
  (paid social, paid search, SEO + AI search, social media management), websites that convert, and
  AI automation that answers and follows up every enquiry.
- **Audience:** Founders and owners of trust-critical, often regulated UK businesses: private clinics and
  aesthetics, financial firms, property and licensing businesses, founder-led start-ups. Mostly arriving
  **on a phone** (Instagram, Google, referrals). Sceptical of agencies, worried about reputation and
  compliance, short of time. They want booked appointments and qualified enquiries, not "awareness".
- **Job of the site:** Book a strategy call.
- **Proof available:** Five real testimonials (LIPS, Embassy Capital, OTTOLUBE, Harley Street Dermal,
  HMO Property Licencing). WhatsApp: +44 7908 470600 (wa.me/447908470600). Instagram @linkclick_digital.
- **Missing (placeholders):** Case-study media and results, creator reels, team photos and bios,
  office address, founding year, phone. See `asset-checklist.md`.

## 2. The subject's world
1. **The hyperlink**: blue, underlined text, the most clicked object on the internet, and literally the brand name.
2. **The phone screen**: 9:16 video, the thumb tap, a notification ("New enquiry").
3. **The booked appointment**: a consultation slot confirmed in a diary.
4. **The compliance check**: an ad or video checked against ASA/CAP or FCA rules before it goes live.
5. **The path**: view → click → visit → enquiry → reply → booking. Every pillar is one step on it.

## 3. Palette (OKLCH, by role)
| Token | Value | Hex (approx.) | Role | Comes from |
|---|---|---|---|---|
| `--paper` | `oklch(0.975 0.004 255)` | #f5f7f9 | Page background | Cool porcelain, clinical calm (deliberately not cream) |
| `--surface` | `oklch(0.995 0.002 255)` | #fcfdff | Raised panels, phone frames | Screen white |
| `--sunken` | `oklch(0.945 0.006 255)` | #eaedf1 | Alternate sections, wells | |
| `--line` | `oklch(0.87 0.008 258)` | #d1d4da | Hairlines, borders | |
| `--ink` | `oklch(0.19 0.03 264)` | #0d1421 | Text; dark sections | Blue-black ink, not generic #111 |
| `--ink-muted` | `oklch(0.47 0.02 262)` | #555b66 | Secondary text (6.35:1 on paper) | |
| `--accent` | `oklch(0.48 0.27 266)` | #1a38f2 | Links, primary action, the "path" line, focus (6.76:1 on paper) | **Hyperlink blue** |
| `--accent-on-dark` | `oklch(0.76 0.12 262)` | #87b1fd | Accent on ink sections (8.56:1) | |
| `--mist` | `oklch(0.948 0.018 262)` | #e6ecf9 | Pale link-blue sheet (sectors) and art tiles | Link blue at a whisper |
| `--mist-2` | `oklch(0.9 0.042 262)` | #ccd9fa | Deeper shapes inside the art | |
| `--ink-tone` | `oklch(0.25 0.045 264)` | #172034 | Quiet tone on ink sections | |
| `--ink-tone-2` | `oklch(0.33 0.055 264)` | | Testimonial quote mark; back frames in the UGC tile | |
| `--accent-tone` / `--accent-deep` | `oklch(0.55 0.235 266)` / `oklch(0.42 0.25 266)` | | Blue-on-blue blocks in the statement figure | Tone on tone, never a gradient |

Accent budget: text and UI accents stay ≤ 5% of a screen and mean "this is a link / this is the path".
The accent also appears as **art**: one full blue sheet (the statement, with its own blue-on-blue figure),
the blue service tile, and single shapes inside the other service tiles. It is never used for gradients, glows or text effects. A fine grain (SVG noise, about 4%)
sits on the blue and ink sheets only, so they read as printed colour rather than flat screen fills.

## 4. Type
| Role | Family / weight | Why |
|---|---|---|
| Display, headings, UI, body | **Schibsted Grotesk** (variable 400–900; Google Fonts, OFL) | Drawn for a news-media group, so it has editorial authority with sharp, slightly quirky details; precise enough for finance, warm enough for clinics. Not on the default list. |
| Quotes only | **Newsreader** italic (variable, opsz; Google Fonts, OFL) | A real person's words set apart from the agency's voice; adds editorial warmth to testimonials |

Scale: fluid clamp, 360 → 1440px, body 16 → 18px, ratio 1.2 → 1.25, display break-out 44 → 136px
(`tokens.css`). Display at weight 600, tracking −0.045em, line-height 0.92. Headings 600, −0.025em.
Body 400, line-height 1.55, measure ≤ 64ch.

## 5. Layout concept
**One link line runs through the page.** Every section moves a founder a step closer to a booked
call, and hyperlink-blue lines (the underline of a link) mark the way: the header underline or
left-margin thread, the lines drawn across services and steps, and the underline on the closing
headline.

Mobile (390px):
```
┌────────────────────────────┐
│ linkclick digital      ☰   │ 56px header (blue underline fills as you scroll)
│                            │
│ Views are easy.            │ hook headline, built word by word
│ Booked calls aren't.       │ key words in link blue
│ Digital marketing, UGC,    │ H1 line 2: the detail (and the SEO keywords)
│ web design and AI auto…    │
│ intro paragraph            │
│ [Book a strategy call]     │
│ [Chat on WhatsApp]         │
├────────────────────────────┤
│ clients (typographic list) │ tight
├────────────────────────────┤
│ ███ blue statement field ██│ opens from an inset card as you scroll
├────────────────────────────┤
│ 01 UGC & creator content   │ the system: editorial rows,
│ 02 Digital marketing       │ a blue line draws across each
│ 03 Web design              │
│ 04 AI automation           │
├────────────────────────────┤
│ who we work with           │
│ how we work (3 steps)      │
│ pairs well with (add-ons)  │ tight, quiet
│ ███ testimonials (dark) ███│
│ FAQ (accordion)            │
│ ███ closing CTA + footer ██│
└────────────────────────────┘
[ sticky bottom bar: Book a strategy call | WhatsApp ] appears after the hero
```

Desktop (1440px):
```
┌───────────────────────────────────────────────────────────────┐
│ linkclick digital  Services Industries About Insights [WhatsApp][Book…] │
│ ┊                                                             │ thread in the left margin
│ ┊ Views are easy.                                             │
│ ┊ Booked calls aren't.                                        │
│ ┊ Digital marketing, UGC,         intro paragraph             │
│ ┊ web design and AI automation…   [Book a strategy call] [WA] │
├───────────────────────────────────────────────────────────────┤
│ cols 1–5 pillar name | cols 6–9 copy | cols 10–12 services    │ system rows
└───────────────────────────────────────────────────────────────┘
```
Section rhythm: hero breathing · blue statement breathing · system standard ·
sectors standard · process tight · add-ons tight · testimonials breathing (ink) · FAQ standard ·
closing CTA breathing (ink).

Surfaces (v5): the page alternates between porcelain and **sheets**, full-width colour panels with
rounded corners (`--sheet-r`), so colour changes read as objects laid on paper, not stripes. Each
section carries **one figure of its own** (section 6), never a repeat:
hero (porcelain + the cursor) · statement (blue sheet + the four pieces + grain) ·
system (porcelain + one art tile per service, each on its own surface) · "many industries, any market" (mist sheet + one tone-on-tone tick; the sector list was replaced on 2026-11-10 when the owner
opened the business to many industries worldwide, "from healthcare to banking") · process (porcelain, big blue step numbers) · add-ons (porcelain, hairline) ·
testimonials (ink sheet + one oversized tonal quote mark + grain) · FAQ (porcelain, calm on purpose) ·
closing + footer (ink sheet + the broken underline + grain). Every section next to a rounded sheet stays
porcelain, so the corners always open onto the same colour.

## 6. Signature element: one figure per section (revised 2026-11-10, v5)
The owner said v4 did not feel high quality and repeated itself (the same ripple circles in the hero,
the statement, the testimonials and the closing). v5 replaces the repeated motif with **one flat
figure per section, taken from that section's own sentence**. Rules: no figure repeats; tone on tone
with at most one blue accent; one scroll-linked move each; the base styles are the final state; no
rings, discs or blobs; art never sits under body text.
- **Hero, the click:** a crisp arrow cursor (ink, white outline) rests on the end of the link
  underline in the headline. Link + click is the name, said once. It lands after the hook builds,
  then the underline draws.
- **Hero headline (owner, 2026-11-10):** "Data-driven, AI-powered [web design]." The linked words
  rotate every 2s, non-stop, in the owner's order: web design, digital marketing, UGC, automation
  ("AI automation" shows as "automation" because the line already says AI-powered). Hover pauses it;
  reduced motion shows "web design" still. CSS only: the words stack in one cell as wide as
  "digital marketing", so nothing reflows; the underline scales and the cursor and full stop slide
  (transforms, measured em widths). The visible words are CSS-generated and aria-hidden; screen
  readers and crawlers get "Data-driven, AI-powered web design, digital marketing, UGC and AI
  automation." Build note: WCAG 2.2.2 asks for a way to pause moving content on touch screens too,
  so consider a small pause control there. The detail line says who and how: "A London team for
  founder-led UK businesses. Real numbers set the plan. AI speeds up the work." The hero intro
  paragraph was removed at the owner's request; headline, detail line and buttons stack on the left.
- **Statement, the pieces:** four unequal blue-on-blue blocks that close into one square as the sheet
  scrolls in ("Most growth problems sit between the pieces"). Desktop: a square in columns 9–12,
  bottom-aligned with the paragraph. Phone: a small mark above the heading.
- **Services, one tile each, each on its own surface:** 01 UGC on ink, three 9:16 frames fanned like a
  hand of cards with the front one playing; 02 digital marketing on mist, a ranked list where the blue
  row climbs to first place; 03 web design on blue, one layout on a desktop and a phone that slides
  up; 04 AI automation on mist, a month of slots where the booked ones fill in blue.
- **Many industries, any market, the check:** one bold tick, mist on mist, wiped in from the left, cropped by the sheet. (Was the sector list until 2026-11-10; the owner now works worldwide in many industries, from healthcare to banking.)
- **Process:** the step numbers themselves, large and blue. No extra art.
- **Testimonials:** one oversized opening quote mark in the quote serif, tone on ink, in the empty
  top-right of the sheet (top padding on phones). It drifts slightly slower than the page.
- **Closing, the break:** the headline's underline snaps off after "breaks." as a short tilted piece.
- **Removed in the "remove one accessory" pass:** a full-width "linkclick" wordmark under the footer
  (it repeated the logo just above it and is a common template move).

### The link line (2026-11-09)
- **What:** the hyperlink-blue line used as one system. On desktop, a thread in the left margin fills
  as you scroll. On phones, the header underline fills instead.
  Lines draw across each service row and process step, and the closing headline gets its link
  underline. One full blue field (the statement) is the page's single bold colour moment.
- **Why it belongs here:** the company is named after the link click, and the underline is the most
  recognisable mark of a link.
- **Removed at the owner's request (2026-11-09):** the hero "path" illustration (creator reel → ad →
  website → AI reply), its parallax, and the sliding "First view · Click · … Booked call." type band.
- **Reduced motion / static:** lines and fields show in their final state; nothing is lost.

### Inner pages (2026-11-10): designed sections, same system
The owner found the services, service and About pages too plain, so they no longer render as one
column of prose. `site/src/lib/blocks.ts` reads each `##` section of the Markdown and lays it out by
what it contains, so writers keep writing plain Markdown:
- `###` groups → **cards**; an ordered list → a **numbered sequence** on the page's one dark sheet;
  a list of **Bold.** items → a **factor grid**; "Label: value" lists → a **fact sheet**; a table →
  a **comparison card** with an ink header row; a plain list → a **checklist**; the rest → an
  editorial **split** (sticky heading and answer on the left, detail on the right).
- Surfaces alternate like the homepage: one ink sheet a page (the first process), pale mist sheets
  for cards, fact sheets, tables and checklists, never two sheets touching.
- Hubs keep their homepage figure in the hero, larger. Under every service hero, a **figures band**
  sets 1–3 sourced numbers the copy already quotes (frontmatter `highlights`, each linked to its
  source). An "On this page" index follows on tablet and desktop.
- **/services/** is a four-panel asymmetric showcase (7/5 then 5/7 columns): each service on its own
  panel with its figure, job, what's included and a link; the whole card is clickable. Then a
  one-system statement and the add-ons.
- **/about/** adds a statement line in the quote serif, the brand facts as a fact sheet, the method
  as the dark sequence, a founder portrait slot (4:5, to supply) and the AI stance as a checklist.
- The only ornament is the link-blue dash (figures, steps, "Where to next" tiles), drawn in on scroll.
  Removed in the "one accessory" pass: the dash on cards.

## 7. Motion plan
- **Hero (load):** the hook headline builds word by word, following the hook-book rule. The first word
  is already showing; each next word arrives about 110ms later; the key words "Booked calls" are in
  link blue. Line 2 and the intro fade in after. About 1s in total.
- **Feedback:** links underline-draw on hover (desktop pointer only); buttons press to 0.97 (80ms);
  FAQ items open with a 200ms opacity transition; the menu sheet slides 16px and fades (240ms).
- **Smooth scroll:** none on the mockup. In the build, Lenis only for desktop fine pointers with
  motion allowed, if wanted.
- **Scroll-linked layer:** every effect is tied to scroll position (CSS scroll-driven animations:
  `animation-timeline: view()/scroll()`), so it plays forwards scrolling down and backwards scrolling
  up. No JavaScript; nothing autoplays.
  1. **Lines draw:** the desktop thread and dot, or the phone header underline; a blue line across the
     top of each service row (its title slides in about 40px); the "How we work" lines, staggered; the
     closing headline's underline.
  2. **A panel opens:** the blue statement field enters as an inset rounded card and opens to full
     width, and its words light up one by one.
  3. **Hero exit:** the headline drifts slightly and fades as it leaves the screen.
  4. **Art (v5), one move per figure:** the statement pieces close into a square; the UGC frames fan
     out and the progress bar fills; the blue row climbs to first place; the phone slides up over the
     desktop; the booked slots fill in one by one; the sectors tick wipes in; the quote mark drifts;
     the closing underline snaps off.
- **Hero load (v5):** after the hook builds, the cursor lands on the linked words (from 700ms) and the
  link underline draws (from 1250ms); from 1.5s the services rotate (2s each, non-stop). Text is
  readable from the first frame.
- **Fallbacks:** under `prefers-reduced-motion`, or in browsers without scroll-driven animations, the
  page is fully static with everything in its final state.
- **Build note:** keep these effects as CSS scroll-driven animations in the Astro build. Add a GSAP
  ScrollTrigger fallback only if analytics show meaningful Firefox traffic.
- **Not doing:** fade-up on every section, count-ups, cursor effects, marquees, preloaders,
  scroll-jacking or pinned sections on mobile.

## 8. Imagery direction
- Real creators and real clients on phones, filmed in their own premises; natural window light;
  neutral-cool grade that sits on porcelain; tight framing on faces and hands.
- Ratios: 9:16 (reels), 4:5 (case-study covers on mobile), 3:2 (team, premises).
- Never: stock "team at laptop", AI-generated people, before/after treatment imagery (ASA risk for clinics).

## 9. Voice
- **Three words:** plain, exact, calm.
- **Headline approach (hook-book):** the first line is at most about 8 words, one strong claim or
  question that makes the reader need line 2, with 1–3 key words in link blue. The detail (what, for
  whom, where) goes in line 2. Never invent a number to make a hook land. UK English.
- **Primary CTA (used everywhere):** "Book a strategy call". Secondary: "Chat on WhatsApp" (https://wa.me/447908470600, with a short pre-filled message). No email address on the site.

## 10. Default check (against `premium-frontend/references/anti-slop.md`)
| Default spotted | Decision |
|---|---|
| Blue accent on near-white (common SaaS look) | **Kept, justified**: it is hyperlink blue, the literal subject of the brand name. Used only as link/path semantics (underlines, the rule, primary button), ≤ 5% of a screen. No blue blocks, gradients or glows. |
| Purple/magenta gradient (the current site's identity) | **Removed.** Flat porcelain and ink only. |
| Centred hero with badge + two buttons | **Avoided.** Left-aligned hook headline, a primary CTA and a quieter WhatsApp button. |
| Accent colour on key words of the headline | **Kept, justified:** the owner's hook-book rule (key words in the one highlight colour). Used only in the hero headline. |
| Three/four identical service cards | **Avoided.** Pillars are editorial rows with different content per row. |
| Numbered 01–04 labels | **Kept, justified**: the pillars are a real sequence (each feeds the next). Used nowhere else. |
| Serif for quotes | **Kept, justified**: limited to testimonials so clients' voices read differently from the agency's. Cool palette avoids the cream + serif + terracotta default. |
| Dark sections | **Two only** (testimonials, closing CTA), ink-tinted, not #111. |
| Stats/metric hero | **Avoided.** No numbers until real, sourced results exist. |
| Client logo wall | **Avoided.** The typographic client strip was also removed at the owner's request (2026-11-10); the client names now appear only with their testimonials. |
| Smooth scroll + split-text everywhere | **Avoided.** One load moment; no Lenis on the mockup. |
| Parallax / scroll-linked motion (v2) | **Added at the owner's request, kept narrow:** three brand motifs only (lines draw, panel opens, gentle parallax). Everything follows the scroll and reverses, nothing hijacks it. Parallax on text is limited to the hero headline fading on exit. |
| Marquee band | **Removed** at the owner's request (2026-11-09). |
| Concentric rings / "radar" motif (v4) | **Removed in v5.** Repeating one motif in four sections read as a template. Each section now has its own figure (section 6). |
| Cursor illustration in the hero (v5) | **Kept, justified:** a static drawing of a pointer on the headline's link, not a custom cursor that follows the mouse. It spells the brand name (link + click). |
| Oversized quote mark on testimonials (v5) | **Kept, narrow:** one only, tone on ink, outside the text, in the quote serif already used for the testimonials. |
| Illustrations per service (v5) | **Kept, narrow:** one tile per core service only, flat rectangles in the page palette, each on a different surface (ink, mist, blue, mist), no people, no icon-in-a-square. Add-ons stay text-only. |
| Grain texture (v4) | **Blue and ink sheets only**, as a static background image (no fixed overlay), about 4% white. Porcelain stays clean. |
| Rounded full-width sheets (v4) | **Three only** (statement, sectors, testimonials) plus the closing's top corners; neighbours stay porcelain so corners are clean. |
| Accent as a full field | **Once per page:** the statement section is the page's single full blue sheet. Elsewhere the accent is a line, a link, a button, or a shape inside the art (service tiles, the click dots). |

## 11. Wordmark
- `linkclick` in Schibsted Grotesk 650, lowercase, tracking −0.04em, underlined in `--accent`
  (underline thickness ≈ 0.07em, offset ≈ 0.14em), followed by `digital` in `--ink-muted`, same size,
  no underline. It reads as a hyperlink followed by plain text.
- Favicon/avatar: `lc` in paper on an ink square with the blue underline.
- Live text in the mockup; outlined SVGs (`design/brand/wordmark.svg`, favicon) are generated from the
  font file with opentype.js during the Astro build, so they don't depend on installed fonts.

## 12. Open questions / assets to request
See `design/asset-checklist.md`.

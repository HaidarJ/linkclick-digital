---
title: "How to Get Recommended by ChatGPT | Linkclick Digital"
description: "How ChatGPT, Perplexity and Google AI Overviews choose which businesses to cite, and what your business can do about it, based on what the platforms publish."
h1: "How to get your business recommended by ChatGPT and Google AI Overviews"
lede: "Getting recommended by ChatGPT, Perplexity or Google's AI Overviews starts with ordinary SEO: pages that can be crawled and indexed, one consistent description of your business, answers backed by sources, and genuine mentions on other sites. This guide from Linkclick Digital, a London-based digital agency working with businesses worldwide, separates what the platforms themselves say from what is still guesswork, and shows how to check your results."
author: "Linkclick Digital"
published: 2026-11-10
updated: 2026-11-10
feeds: "/services/digital-marketing/seo-ai-search/"
faq:
  - q: "Does ChatGPT use Bing to find businesses?"
    a: "OpenAI doesn't name an outside search index in its [crawler documentation](https://developers.openai.com/api/docs/bots), so treat 'ChatGPT uses Bing' as unconfirmed. What OpenAI does say is that its OAI-SearchBot crawler surfaces websites in ChatGPT search, and that sites blocking it won't appear in ChatGPT search answers. Being indexed by Bing still matters for Microsoft Copilot."
  - q: "Do I need an llms.txt file to appear in AI answers?"
    a: "No. Google says its Search and AI features don't use llms.txt or other AI text files ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)), and an [Ahrefs server-log study](https://ahrefs.com/blog/llmstxt-study/) found 97% of llms.txt files got no requests in May 2026. If you publish one, keep it accurate, but put the effort into your pages and your reputation."
  - q: "Can an agency guarantee that ChatGPT will recommend my business?"
    a: "No. No business controls which sources an AI assistant cites, and answers change between sessions and model updates. Linkclick Digital doesn't promise citations or rankings. It works on the things the platforms say they use, such as crawlable pages, consistent facts and genuine mentions, and reports the results each month so you can judge the return."
  - q: "Is GEO different from SEO?"
    a: "Mostly no. Google says optimising for its generative AI features is still SEO, with no special files, markup or content formats required ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). GEO adds emphasis on passages that can be quoted on their own, consistent facts about your business and mentions on other sites. Linkclick Digital sells the two as one [SEO and AI search service](/services/digital-marketing/seo-ai-search/)."
---

## How ChatGPT, Perplexity and AI Overviews pick sources

ChatGPT, Perplexity and Google's AI Overviews can all search the web while they answer, then summarise and link the pages they retrieve. A business can only be cited that way if the platform's crawler can reach its pages and they sit in that platform's index, so crawl access and indexing come before anything written for AI.

Each platform documents its own route in.

**Google AI Overviews and AI Mode** draw on Google's index. Google says a page must be indexed and eligible to show in Search with a snippet to appear as a supporting link, and that there are no additional requirements beyond that ([Google Search Central, AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)). Both features run several related searches for one question, which Google calls query fan-out, so they can link to a wider mix of pages than the classic results.

**ChatGPT** finds pages for its search features with a crawler called OAI-SearchBot. OpenAI says sites that opt out of OAI-SearchBot won't be shown in ChatGPT search answers, and that a separate crawler, GPTBot, collects content that may be used for training ([OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)). OpenAI doesn't name an outside search index there, so the common claim that ChatGPT runs on Bing is unconfirmed.

**Perplexity** uses PerplexityBot, which it describes as designed to surface and link websites in its search results and says isn't used to crawl content for AI foundation models ([Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)). A second agent, Perplexity-User, fetches pages when someone asks a question.

**Microsoft Copilot** draws on Bing: Bing Webmaster Tools now reports how often a site is cited as a source in Copilot answers ([Bing Webmaster Blog, February 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). Bing's rewritten webmaster guidelines say pages focused on a single topic are more likely to be chosen as grounding sources, and recommend placing essential information near the top ([Search Engine Journal, February 2026](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)).

The practical first step is a crawl check. Make sure your robots.txt and any CDN or firewall bot settings allow Googlebot, Bingbot, OAI-SearchBot and PerplexityBot, and keep your main text in the page's HTML rather than loading it with scripts. [OpenAI](https://developers.openai.com/api/docs/bots) and [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) both say robots.txt changes can take up to a day to reach their systems.

## The difference between SEO and GEO

SEO (search engine optimisation) gets pages found and ranked in search engines. GEO (generative engine optimisation) aims to get a business quoted, cited or recommended inside AI-generated answers. Google's guidance says optimising for its generative AI features is still SEO ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)), so GEO works best as an extension of SEO, not a replacement for it.

Google's guide goes further: you don't need special machine-readable files, Markdown copies, special schema or content broken into small chunks to appear in its AI features ([Google Search Central, optimising for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). The term GEO was introduced in a 2023 research paper by Aggarwal and colleagues, later published at the KDD 2024 conference ([GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735)).

Classic search still sends far more visitors. Across 101,574 websites, SE Ranking found AI platforms sent 0.32% of all website traffic in 2026 (about 0.16% in the UK), against 42.75% from organic search, even though AI traffic grew 16 times from 2024 ([SE Ranking, June 2026](https://seranking.com/blog/ai-traffic-research-study/)).

At the same time, AI answers are taking clicks from ordinary results. Ahrefs found an AI Overview correlates with a 58% lower average click-through rate for the top-ranking page, comparing December 2025 with December 2023 across 300,000 keywords ([Ahrefs, February 2026](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update)). So the same groundwork now has two jobs: ranking, and being the source the answer cites.

| | SEO | GEO |
|---|---|---|
| Goal | Rank pages in search results | Be cited or named in AI answers |
| Where it shows | Google and Bing results | ChatGPT, Perplexity, Copilot, Google AI Overviews and AI Mode |
| What it builds on | Crawlable, indexed, useful pages | The same pages, plus passages that stand alone and mentions on other sites |
| How you measure it | Rankings, clicks, enquiries | Citations, mentions in answers, AI referral visits, enquiries |

Linkclick Digital sells the two together as one [SEO and AI search service](/services/digital-marketing/seo-ai-search/), because the second depends on the first.

## Make your business one clear entity

An entity is the way search engines and AI assistants understand your business: one name, one description and one set of facts. Bing's 2026 guidelines ask for entity names that are clear and consistent ([Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)), and Google lists an up-to-date Business Profile among its best practices for AI features ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)).

Consistency is something you control, so make it complete.

- **Use one name everywhere.** Linkclick Digital always uses its full name, because searches for the brand also show an anime series and other companies with similar names.
- **Write one descriptor and one fact sheet.** Say what you do, for whom, where, since when and who runs it, then reuse that wording on your About page, Google Business Profile, LinkedIn, directory listings and press boilerplate.
- **Keep your Google Business Profile current.** Google names up-to-date Business Profile and Merchant Center information as a best practice for its AI features ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)).
- **Use structured data honestly.** Google says no special schema.org markup is needed for its AI features, and that structured data should match the visible text on the page ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)).
- **Show how you can be verified.** Name the people behind the business, and if your industry has a register, licence or membership a customer would check, show where your listing can be found.

## Write pages AI can quote

A page AI can quote answers one question near the top, in a passage that still makes sense when lifted out on its own, and backs its claims with named, linked sources. In lab tests by Aggarwal and colleagues, adding citations, quotations and statistics were the best-performing edits, raising a page's visibility in generative answers by up to 40% ([GEO study, KDD 2024](https://arxiv.org/abs/2311.09735)).

Read that study carefully. It tested generative engines from 2023 plus Perplexity, and lower-ranked pages gained most: citing sources raised visibility for fifth-ranked pages by 115.1%, while top-ranked pages lost 30.3% on average ([GEO study, full paper](https://arxiv.org/html/2311.09735v3)). Keyword stuffing scored below an unedited page on the study's main measure. The lesson is that evidence and specifics help, not that any edit has a predictable effect.

Bing's guidance points the same way, with one topic per URL and key facts near the top ([Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)). Google says you don't need to write in a special way for AI, and that a first-hand review offers a perspective a summary of other pages can't ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

On the page, that means:

- **Headings that ask the customer's question**, such as "How much does UGC cost in the UK?", followed by a first paragraph that answers it.
- **The subject named in the sentence.** "Linkclick Digital keeps real people on camera in its UGC ads" can be quoted on its own; "we're experts in UGC" can't.
- **Specifics over adjectives:** what drives a price, how long a step takes, which places you serve, which rules apply.
- **Sources linked in the sentence that uses them**, ideally the original: the regulator, the platform's own documentation, the study itself.
- **A named author, a visible "last updated" date and signs of real experience:** your process, your photos, your results.

Our guide to [how much UGC costs in the UK](/insights/ugc-costs-uk/) is written this way, with every published rate linked to the guide it comes from.

## Get mentioned on other sites

What other websites say about your business is among the strongest signals linked to AI visibility. In Ahrefs' study of 75,000 brands, branded web mentions correlated with visibility in Google's AI Overviews at 0.664, about three times as strongly as backlinks at 0.218, though Ahrefs stresses that correlation isn't causation ([Ahrefs, May 2025](https://ahrefs.com/blog/ai-overview-brand-correlation/)).

Academic work points the same way. A 2025 study by Chen and colleagues found AI search services showed a bias towards earned media, meaning third-party, authoritative sources, over brand-owned and social content ([arXiv, September 2025](https://arxiv.org/abs/2509.08919)). The mentions have to be real: Google says seeking inauthentic mentions across the web isn't as helpful as it might seem ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

Genuine mentions usually come from:

- **Reviews from real customers** on Google and the review sites your customers use, asked for fairly and never bought.
- **Directory and register listings** that use the same name and description as your website.
- **Trade press, podcasts and guest articles** where you add expertise people can't get elsewhere.
- **Partners, suppliers and professional bodies** that list or recommend you.
- **Video** that names your business and topic in the title and description: explainers, case studies, behind the scenes.

## What doesn't work: llms.txt, AI-only pages and fake reviews

Most shortcuts sold as AI SEO don't hold up. Google says its Search features ignore llms.txt and other AI text files, and that pages made for every fan-out variation of a query can breach its scaled content abuse policy ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). In the UK, fake reviews have been banned since 6 April 2025 ([GOV.UK](https://www.gov.uk/government/news/fake-reviews-and-sneaky-hidden-fees-banned-once-and-for-all)).

### llms.txt

llms.txt is a proposed file that lists a site's key pages for language models. Ahrefs checked server logs for 137,210 domains in May 2026: of roughly 38,000 sites with a valid llms.txt, 97% received no requests for it that month, and no major AI platform has committed to reading the file ([Ahrefs, June 2026](https://ahrefs.com/blog/llmstxt-study/)). An accurate one does no harm, but it isn't a lever.

### Pages written only for AI

Google says creating pages for fan-out variations mainly to manipulate rankings or AI responses violates its scaled content abuse policy, and that a high number of pages doesn't make a site more relevant ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Bing's 2026 guidelines now class artificially engineered language aimed at AI citations alongside keyword stuffing, and treat hidden instructions to AI systems as prompt injection ([Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)).

### Fake reviews and bought mentions

In the UK, the CMA's guidance says fake reviews and concealed incentivised reviews are banned, and that businesses publishing reviews must take reasonable and proportionate steps to prevent and remove them ([CMA fake reviews guidance](https://www.gov.uk/government/publications/fake-reviews-cma208)). Paid articles and listicle placements must be clearly labelled as advertising under the UK's CAP Code ([rules 2.1 and 2.4](https://www.asa.org.uk/type/non_broadcast/code_section/02.html)). If you sell in other countries, check the review and advertising rules in each one.

### Blocking the wrong crawler

Blocking OAI-SearchBot removes a site from ChatGPT search answers, while blocking GPTBot only signals that content shouldn't be used for training ([OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)). Google says its AI Overviews and AI Mode follow normal Search controls such as nosnippet and noindex, while Google-Extended covers training and grounding in its other systems ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Check what each block does before you add it.

## How to check whether AI recommends you

To check whether AI assistants recommend your business, ask them the questions your customers ask, on a fixed schedule, and record whether you are named, whether your site is cited and whether the facts are right. Then add the platforms' own data: [Google Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) now reports impressions in AI Overviews and AI Mode, and [Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) reports Copilot citations.

1. **Write a prompt set.** List the real questions buyers ask, by service, problem and place, such as "Which London agency makes human-led UGC ads?", plus an entity check: "What is [your business]?"
2. **Run it every month in each assistant.** Use ChatGPT, Perplexity, Gemini, Copilot and Google's AI Mode, each in a fresh session. Answers vary from run to run, so watch the trend rather than a single result.
3. **Log what you see.** Note whether you are named, which URL is cited, which competitors appear and whether anything said about you is wrong.
4. **Check Google Search Console.** Its Search Generative AI performance reports, launched on 3 June 2026 and available to all websites since 31 August 2026, show impressions in AI Overviews and AI Mode ([Google Search Central blog](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)). Clicks from those features appear in the normal Performance report under the Web search type ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)).
5. **Check Bing Webmaster Tools.** The AI Performance report, in public preview since 10 February 2026, shows total citations, cited pages and the grounding queries behind them across Copilot and Bing's AI summaries ([Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)).
6. **Track AI referrals in analytics.** Group visits that arrive from chatgpt.com, perplexity.ai, copilot.microsoft.com and gemini.google.com into one channel, so you can see whether AI answers send you customers.
7. **Fix the causes, then measure enquiries.** Correct wrong facts where they first appear, improve the pages that should be cited, and judge the work on enquiries and booked calls, not mentions alone.

This is how Linkclick Digital measures AI visibility in its [SEO and AI search work](/services/digital-marketing/seo-ai-search/), reported monthly alongside Search Console and Bing data. If you want the same check run for your business, [book a strategy call](/contact/).

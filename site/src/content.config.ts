import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

// Page files mirror their URL: pages/services/ugc-content.md → /services/ugc-content/
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(170),
    h1: z.string(),
    lede: z.string().default(''),
    breadcrumb: z.array(z.object({ label: z.string(), href: z.string().optional() })).default([]),
    schema: z
      .object({
        type: z.enum(['Service', 'CollectionPage', 'WebPage', 'AboutPage', 'ContactPage']),
        serviceType: z.string().optional(),
        audience: z.string().optional(),
      })
      .default({ type: 'WebPage' }),
    updated: z.coerce.date().optional(),
    faq,
    related: z.array(z.object({ href: z.string(), label: z.string() })).default([]),
    // Sourced figures already quoted in the page body, shown as a band under the hero.
    highlights: z.array(z.object({ value: z.string(), label: z.string(), source: z.string(), href: z.string().url() })).default([]),
    noindex: z.boolean().default(false),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(170),
    h1: z.string(),
    lede: z.string(),
    author: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    feeds: z.string().optional(),
    faq,
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, insights };

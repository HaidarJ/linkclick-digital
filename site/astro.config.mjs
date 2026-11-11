// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { markTodos } from './src/lib/mark-todos.mjs';

// Old WordPress URLs (content/seo-strategy.md §5). GitHub Pages can't send real 301s, so Astro writes
// small redirect pages (instant meta refresh + canonical) for these paths.
const redirects = {
  '/289-2/': '/services/digital-marketing/',
  '/our-blog/': '/insights/',
  // Pages removed on 2026-11-10 when Linkclick Digital opened to every industry: send old links somewhere useful.
  '/industries/': '/services/',
  '/industries/aesthetic-clinics/': '/services/',
  '/industries/financial-services/': '/services/',
  '/industries/property/': '/services/',
  '/industries/startups/': '/services/',
  '/insights/aesthetic-clinic-advertising-rules/': '/insights/',
};

export default defineConfig({
  site: 'https://www.linkclickdigital.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { format: 'directory' },
  // Minify CSS with esbuild, not Vite's default (Lightning CSS). Lightning CSS folds
  // `animation-timeline: view()` into the `animation` shorthand, which browsers reject, so every
  // scroll-driven animation silently stopped. scripts/check-css.mjs guards against it coming back.
  vite: { build: { cssMinify: 'esbuild' } },
  redirects,
  integrations: [
    markTodos(),
    sitemap({
      filter: (page) => !Object.keys(redirects).some((from) => page.endsWith(from)) && !page.endsWith('/404/') && !page.endsWith('/contact/thank-you/'),
    }),
  ],
});

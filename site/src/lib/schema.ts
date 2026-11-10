// JSON-LD builders. Every node describes what the page visibly says (content/seo-strategy.md §6).
import { SITE, ORG, WEBSITE, ORG_ID } from './site';
import { plain } from './inline';

type Crumb = { label: string; href?: string };
type Faq = { q: string; a: string };

export const abs = (path: string) => new URL(path, SITE).href;

export function breadcrumbs(path: string, crumbs: Crumb[]) {
  const items = [{ label: 'Home', href: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: abs(c.href ?? path),
    })),
  };
}

export function faqPage(path: string, faq: Faq[]) {
  if (!faq.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    isPartOf: { '@id': `${abs(path)}#webpage` },
    mainEntity: faq
      .filter((f) => !/CLIENT TO CONFIRM/.test(f.a))
      .map((f) => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
}

export function webPage(path: string, type: string, name: string, description: string, extra: Record<string, unknown> = {}) {
  return {
    '@type': type,
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    isPartOf: { '@id': `${SITE}/#website` },
    breadcrumb: { '@id': `${abs(path)}#breadcrumb` },
    inLanguage: 'en-GB',
    ...extra,
  };
}

export function graph(...nodes: (Record<string, unknown> | null)[]) {
  return { '@context': 'https://schema.org', '@graph': [ORG, WEBSITE, ...nodes.filter(Boolean)] };
}

export function service(path: string, name: string, description: string, serviceType?: string, audience?: string) {
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name,
    description,
    ...(serviceType ? { serviceType } : {}),
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    url: abs(path),
  };
}

// The four core services, worded as on the approved homepage (mockup/homepage.html, the "system" section).
export type Service = {
  key: 'ugc' | 'dm' | 'web' | 'ai';
  name: string;
  job: string;
  href: string;
  copy: string;
  includes: { label: string; href?: string }[];
  more: string;
};

export const SERVICES: Service[] = [
  {
    key: 'ugc',
    name: 'UGC & creator content',
    job: 'Earns trust',
    href: '/services/ugc-content/',
    copy: 'Short-form video made with real customers, vetted creators and your founders, filmed for Reels, TikTok and Shorts and cut into ad variations. AI helps us edit, caption and test faster; real people stay on camera.',
    includes: [{ label: 'Customer and creator UGC' }, { label: 'Founder-led video' }, { label: 'Short-form editing' }, { label: 'Ad creative variations' }],
    more: 'How we make UGC',
  },
  {
    key: 'dm',
    name: 'Digital marketing',
    job: 'Gets seen',
    href: '/services/digital-marketing/',
    copy: 'Paid social on Meta and TikTok, paid search, SEO and AI search visibility, and day-to-day social media management, run from one plan and one report. We optimise for booked calls and qualified enquiries, not likes.',
    includes: [
      { label: 'Paid social ads', href: '/services/digital-marketing/paid-social/' },
      { label: 'Paid search', href: '/services/digital-marketing/paid-search/' },
      { label: 'SEO and AI search (GEO)', href: '/services/digital-marketing/seo-ai-search/' },
      { label: 'Social media management', href: '/services/digital-marketing/social-media-management/' },
    ],
    more: 'How we run digital marketing',
  },
  {
    key: 'web',
    name: 'Web design',
    job: 'Converts',
    href: '/services/web-design/',
    copy: 'Fast, mobile-first websites and landing pages built to turn visits into enquiries, and structured so Google and AI assistants can understand and recommend your business.',
    includes: [{ label: 'Websites' }, { label: 'Landing pages' }, { label: 'Conversion optimisation' }, { label: 'Technical SEO' }],
    more: 'How we design websites',
  },
  {
    key: 'ai',
    name: 'AI automation',
    job: 'Answers',
    href: '/services/ai-automation/',
    copy: 'AI assistants and workflows that reply to every enquiry from your website, Instagram or WhatsApp, qualify it, book it into your calendar and follow up, with a person in the loop for anything sensitive.',
    includes: [{ label: 'AI enquiry and chat assistants' }, { label: 'Calendar booking flows' }, { label: 'Follow-ups and reminders' }, { label: 'CRM and lead routing' }],
    more: 'How our AI automation works',
  },
];

export const ADDONS = [
  { label: 'Brand identity', href: '/add-ons/#brand-identity-design' },
  { label: 'Copywriting', href: '/add-ons/#copywriting' },
  { label: 'Email and SMS', href: '/add-ons/#email-and-sms-marketing' },
  { label: 'Analytics and reporting', href: '/add-ons/#analytics-and-reporting' },
  { label: 'AI team training', href: '/add-ons/#ai-team-training' },
];

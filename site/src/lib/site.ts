// One place for the business facts the templates use. Items marked TODO come from the client.
import home from '../data/home-schema.json';

export const SITE = 'https://www.linkclickdigital.com';
export const NAME = 'Linkclick Digital';
export const DESCRIPTOR = 'London digital agency for UGC, digital marketing, web design and AI automation.';
export const WHATSAPP =
  "https://wa.me/447908470600?text=Hi%20Linkclick%20Digital%2C%20I%27d%20like%20to%20talk%20about%20growing%20my%20business.";

// TODO(client): the Google Calendar appointment schedule link. While empty, "Book a strategy call"
// buttons go to /contact/, which carries the enquiry form and WhatsApp.
export const BOOKING_URL = '';

// TODO(client): the deployed Google Apps Script web app URL (integrations/google-apps-script/).
export const FORM_ENDPOINT = '';

// TODO(client): the monthly budget bands for the enquiry form. The field is hidden while empty.
export const BUDGET_BANDS: string[] = [];


const graph = (home as { '@graph': Record<string, unknown>[] })['@graph'];
export const ORG = graph.find((n) => String(n['@id']).endsWith('#organization'))!;
export const WEBSITE = graph.find((n) => String(n['@id']).endsWith('#website'))!;
export const ORG_ID = `${SITE}/#organization`;

// TODO(client): the Google Analytics 4 measurement ID (G-XXXXXXX). While empty, no analytics script is ever
// loaded. Once set, it loads only after a visitor accepts analytics cookies in the cookie banner.
export const GA_MEASUREMENT_ID = '';

// Cookie consent: bump the version to ask everyone again (e.g. when a new cookie category is added).
export const CONSENT = { cookie: 'lc_consent', version: 1, days: 180 };

/**
 * Linkclick Digital: website enquiry form → Google Sheet + email notification.
 *
 * Set-up (in Linkclick Digital's Google Workspace account):
 *  1. Create a Google Sheet called "Website enquiries".
 *  2. In the Sheet: Extensions › Apps Script. Replace the editor contents with this file. Save.
 *  3. Optional: set NOTIFY_TO below to another inbox. Left blank, enquiry emails go to the Google
 *     account that owns this script (kept blank here so no address sits in the public repository).
 *  4. Deploy › New deployment › type "Web app". Execute as: Me. Who has access: Anyone. Deploy,
 *     approve the permissions, and copy the web app URL (ends in /exec).
 *  5. Put that URL in site/src/lib/site.ts as FORM_ENDPOINT, commit and push.
 *  6. In the editor, choose installDailyPurge in the function menu and click Run once. Enquiries older
 *     than 90 days are then deleted every night, as the privacy policy says.
 * After editing this script later, use Deploy › Manage deployments › Edit › New version (the URL stays).
 */
const NOTIFY_TO = ''; // blank = the Google account that owns this script
const SHEET_NAME = 'Enquiries';
const FIELDS = ['name', 'email', 'phone', 'business', 'website', 'industry', 'budget', 'message'];
const MAX_LEN = 4000;
const KEEP_DAYS = 90; // privacy policy: enquiries are kept for 90 days, then deleted

function doPost(e) {
  const p = (e && e.parameter) || {};
  // Spam checks: the hidden "fax" field must stay empty, and a person takes more than 3 seconds.
  // "t" is the time spent on the page in milliseconds, measured by the browser (blank without JavaScript).
  if (p.fax || (p.t && Number(p.t) < 3000)) return done_();
  if (!p.name || !p.email || !p.message || p.consent !== 'yes') return done_();

  const clean = {};
  FIELDS.forEach((f) => (clean[f] = safe_(p[f])));

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Received', ...FIELDS, 'Consent']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), ...FIELDS.map((f) => clean[f]), 'yes']);
  } finally {
    lock.releaseLock();
  }

  const lines = FIELDS.filter((f) => clean[f]).map((f) => `${f[0].toUpperCase() + f.slice(1)}: ${clean[f]}`);
  MailApp.sendEmail({
    to: NOTIFY_TO || Session.getEffectiveUser().getEmail(),
    replyTo: clean.email,
    subject: `New website enquiry: ${clean.name}${clean.business ? ` (${clean.business})` : ''}`,
    body: lines.join('\n') + '\n\nSaved in the "Website enquiries" sheet.',
  });
  return done_();
}

// Stops spreadsheet formula injection and trims very long input.
function safe_(v) {
  let s = String(v || '').trim().slice(0, MAX_LEN);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

// Shown only when the browser posts without JavaScript; with JavaScript the site goes to its own
// thank-you page (/contact/thank-you/). target="_top" lets the link leave Apps Script's frame.
function done_() {
  return HtmlService.createHtmlOutput(
    '<p style="font-family:system-ui;padding:2rem;max-width:40rem;line-height:1.5">Thanks. Your enquiry has been sent, ' +
      'and someone from Linkclick Digital will be in touch within 24 hours. ' +
      '<a href="https://www.linkclickdigital.com/contact/thank-you/" target="_top">See what happens next</a></p>',
  );
}

/** Deletes enquiries older than KEEP_DAYS from the sheet. Runs every night once installDailyPurge() has run. */
function purgeOldEnquiries() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) return;
  const cutoff = Date.now() - KEEP_DAYS * 24 * 60 * 60 * 1000;
  const received = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
  for (let i = received.length - 1; i >= 0; i--) {
    const d = received[i][0];
    if (d instanceof Date && d.getTime() < cutoff) sheet.deleteRow(i + 2);
  }
}

/** Run once from the Apps Script editor: schedules purgeOldEnquiries() every day at about 3am. */
function installDailyPurge() {
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === 'purgeOldEnquiries')
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('purgeOldEnquiries').timeBased().everyDays(1).atHour(3).create();
}

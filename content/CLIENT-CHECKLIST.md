# What Linkclick Digital needs to supply

Everything the website still shows as `[CLIENT TO CONFIRM: …]`, plus the settings the site needs before
launch. Page names in brackets show where each item appears. Last checked: 10 November 2026.

## 1. Company and legal details
- [x] Linkclick Digital Limited, registered in England and Wales, company number 10976392 *(Privacy, Terms, footer, structured data)*
- [x] No office address on the site (owner's choice). Note: UK trading-disclosure rules expect a company website to show its registered office address.
- [ ] Solicitor review of the Terms, Privacy and Cookie pages
- [x] Incorporated September 2017 *(About, structured data)*
- [x] Data requests and complaints: info@linkclickdigital.com *(Privacy, Complaint policy)*
- [x] Enquiries kept for 90 days *(Privacy)*. The Google Sheet now deletes older rows every night. **Also delete, after 90 days:** call bookings in Google Calendar, WhatsApp chats and the enquiry notification emails in your inbox.
- [x] Complaint policy working hours and timescales confirmed
- [x] ICO registration number: removed from the site
- [x] Confirmed: the new line on representatives: "email info@linkclickdigital.com with their name and your confirmation that they can act for you" *(Complaint policy)*

## 2. People
- [x] No founder or author names, and no founder photo, on the site (owner's choice). Articles are credited to "Linkclick Digital".

## 3. Proof
- [x] Results and case studies: left off the site for now (owner's choice, 2026-11-10)
- [x] Permission confirmed to name each client and show their testimonial: Harley Street Dermal, Embassy Capital, HMO Property Licencing, OTTOLUBE, LIPS *(homepage testimonials)*

## 4. How you work
- [x] UGC turnaround: one to three weeks, depending on scale *(UGC)*
- [x] UGC ownership: the client owns the final files once all invoices are paid in full *(UGC)*
- [x] Website timelines: depend on the scale of the project *(Web design)*
- [x] AI tools: described as third-party AI tools of various kinds *(AI automation)*
- [x] Confirmed: the strategy call is 30 minutes *(Contact, closing section on every page)*
- [x] Confirmed: these working practices, which the copy states as commitments:
  - every claim in a script or ad is logged with its evidence
  - your clients sign off scripts before filming and edits before anything is published
  - AI assistants say they are AI, hand over to a person when asked, and give no professional advice
  - chat records are deleted after an agreed period
  - AI helps draft and edit; a person checks everything before it goes live (About: true once you've reviewed the site)

## 5. Set-up for launch
- [ ] Google Calendar booking page link for "Book a strategy call" *(`site/src/lib/site.ts` → `BOOKING_URL`)*
- [ ] The inbox that should receive enquiries *(Apps Script → `NOTIFY_TO`)*, then deploy the script and send the web app URL *(`FORM_ENDPOINT`)*
- [ ] Monthly budget ranges for the enquiry form, e.g. three or four bands *(`BUDGET_BANDS`; the field stays hidden until set)*
- [x] Google Analytics: yes *(Cookie and Privacy policies updated)*
- [ ] Google Analytics measurement ID (G-…) *(`GA_MEASUREMENT_ID`)*
- [x] Google Analytics data retention: 14 months *(Privacy)*. Set the same in Google Analytics: Admin › Data collection and modification › Data retention › 14 months.
- [x] Cookie banner: "Accept all" and "Manage cookie consent" only (owner's choice); "Reject all" is in the settings panel. The ICO expects refusing to be as easy as accepting.
- [x] Social profiles: instagram.com/linkclick_digital confirmed; no other profiles for now *(footer, structured data)*
- [x] The WhatsApp number (+44 7908 470600) is listed as the business phone for search engines *(structured data)*
- [ ] GitHub: make the repository public, or confirm a GitHub Pro or Team plan, so GitHub Pages can publish it
- [ ] Domain: who can edit the DNS for linkclickdigital.com on launch day

# Interior Design Business Website

Plain HTML/CSS/JS, no server/framework required at runtime. Open `index.html`
in a browser, or deploy the folder as-is to any static host (Netlify, Vercel,
GitHub Pages, cPanel, etc). There is one optional Node build step —
`scripts/prerender.js` — see the SEO section below; it's only needed after
editing `js/data.js`, not for local viewing or deployment itself.

## Files

- `index.html` — page structure, plus the pre-rendered Overview/Products/
  Reviews/FAQ content and JSON-LD (see SEO section — regenerate with
  `node scripts/prerender.js` after editing `js/data.js`)
- `css/styles.css` — all styling
- `js/data.js` — **single source of truth**: business info + full product catalogue
- `js/main.js` — wires up interactivity on top of the pre-rendered markup
  (and can still render everything client-side from `data.js` if the
  pre-render step hasn't been run)
- `scripts/prerender.js` — build-time script that bakes `data.js` content
  into `index.html`

## Domains / hosting

- `https://islamabadinterior.com` is the canonical production domain (Vercel).
  `http://islamabadinterior.com` already 301/308-redirects to it automatically
  — no action needed.
- `https://www.islamabadinterior.com` currently does **not** work: DNS
  resolves it, but it isn't added as a domain on the Vercel project, so
  there's no valid SSL certificate for it and requests fail at the TLS
  handshake. This needs a manual fix in the Vercel dashboard (Project →
  Settings → Domains): add `www.islamabadinterior.com` and set it to redirect
  to the apex domain, so it matches the canonical tags already in place
  site-wide. This can't be fixed from the codebase.

## Adding or editing products

Open `js/data.js`. Find the category (e.g. `Wallpaper` → `PVC` → `Hard Panel`)
and add an entry to its `items` array using `makeItems([...path], [[name, desc], ...])`,
or add a plain object `{ name, desc, image }` directly. No HTML/JS changes needed —
the page re-renders from this file automatically.

Adding a whole new category or subcategory: copy an existing node's shape
(`{ id, name, cardDesc, children: [...] }` or `{ id, name, cardDesc, items: [...] }`)
and add it to the `PRODUCT_CATALOGUE` array. Give it a unique `id`.

## Adding real photos

Every product's `image` path is auto-generated from its category path + name
(see the `img()` helper in `data.js`), e.g.:

```
assets/images/wallpaper/pvc/hard-panel/pvc-hard-panel-design-01.jpg
```

You don't need to create these files ahead of time — until a file exists at
that path, the site shows a "Photo coming soon" tile instead of a broken
image. Just drop a correctly-named `.jpg`/`.png` into `assets/images/...` and
it appears automatically on next page load. To find the exact expected path
for any product, open the browser DevTools console and inspect the `<img>`
element, or temporarily add a `console.log(item.image)` in `main.js`.

Service card images on the homepage (Section 1) follow the pattern
`assets/images/services/<category-id>.jpg` (category ids are in `data.js`).

**If you have PDFs of product photos**: extract each photo as an individual
image file first (screenshot/export from the PDF), name it to match the
expected path above, then drop it into `assets/images/`.

## Updating business info

All in one place at the top of `js/data.js` — business name, tagline, phone
number, WhatsApp number, email, address, and the Google Maps embed URL.
Everything on the site (header, hero, every "Message on WhatsApp" button,
the tap-to-chat phone number, footer, contact section) reads from these values.

Every CTA on the site is a WhatsApp button — there is no phone-dial (`tel:`)
link anywhere. The `phoneTel`/`phoneDisplay` fields in `data.js` are only used
to display the number as text; `whatsapp` is the number actually used to
build every `wa.me` link. Keep them in sync (same number, since this is a
WhatsApp Business number).

To get your real Google Maps embed URL: search your business/address on
Google Maps → Share → Embed a map → copy the `src="..."` URL from the
`<iframe>` code and paste it as `mapEmbedSrc`.

## Contact form

The form on the Contact section currently opens the visitor's email app
with the message pre-filled (a `mailto:` link) — it does **not** send
anything directly to a server, so make sure the `email` value in `data.js`
is a real inbox you check.

To collect submissions properly (recommended before launch), connect a form
backend instead of relying on `mailto:`, for example:

- [Formspree](https://formspree.io) — point the form's `action` at your Formspree endpoint
- [EmailJS](https://www.emailjs.com) — send email client-side via their JS SDK
- Your own serverless function (Netlify/Vercel function, etc.)

The relevant code to change is `setupContactForm()` in `js/main.js`.

## SEO

The site is set up for local SEO targeting Islamabad:

- `BUSINESS.siteUrl` in `js/data.js` is set to the live domain
  (`https://islamabadinterior.com`) — canonical tags, Open Graph `og:url`,
  and the structured data all read from `siteUrl`. If the domain ever
  changes, update it there, plus `robots.txt` (`Sitemap:` line) and
  `sitemap.xml` (`<loc>`).
- `js/main.js`'s `injectStructuredData()` builds a `HomeAndConstructionBusiness`
  JSON-LD block straight from `BUSINESS`/`PRODUCT_CATALOGUE`/`REVIEWS` (name,
  address, phone, geo coordinates, `areaServed`, offers, reviews) — keep
  those objects accurate and the schema stays correct.
- `FAQS` in `js/data.js` powers both the visible FAQ section and a
  `FAQPage` JSON-LD block (for FAQ rich results in Google search). Edit
  questions/answers there — `js/main.js` renders and mirrors them
  automatically, so they never drift out of sync.
- Every product/category image gets `Islamabad` appended to its `alt` text
  automatically (see `createMedia(...)` calls in `main.js`) — no per-product
  edits needed.
- `og:image` / `twitter:image` point at `assets/images/og-cover.jpg` — a real
  1200×630 cover image already lives there for link previews.
- **`index.html` is pre-rendered, not JS-only.** The Overview cards, every
  leaf category's product panel, the Reviews section, the FAQ section, and
  the `HomeAndConstructionBusiness`/`FAQPage` JSON-LD are all baked directly
  into `index.html` by `scripts/prerender.js`, which reads `js/data.js` and
  writes the same markup `js/main.js` would otherwise build client-side.
  That means this content is present in the raw HTML response — visible to
  crawlers and users with JavaScript disabled or failing, not just after JS
  executes. `js/main.js` still runs on every page load: it detects the
  pre-rendered markup (via `data-category-id`/`data-leaf-id`/`data-goto-id`
  attributes and by checking whether containers already have children) and
  wires up interactivity (category switching, WhatsApp links, structured
  data) instead of re-creating the DOM, so nothing is duplicated. It also
  still works standalone (rebuilding everything client-side) if you ever
  open a copy of `index.html` before running the prerender step.

  **Run this after any change to `js/data.js`, then commit the updated
  `index.html`:**

  ```
  node scripts/prerender.js
  ```

  The product catalogue's own tree navigation (the sidebar you browse by
  category) is still JS-rendered — it's pure navigation UI, and every
  category name it would show is already present as static text elsewhere
  (Overview cards, panel `<h3>` headings), so there's no unique content lost
  for a no-JS visitor or crawler. A `<noscript>` banner near the top of
  `index.html` tells real no-JS visitors that category switching won't work
  and points them to WhatsApp.
- `guides/` holds standalone long-form articles (`guides/index.html` is the
  hub) targeting specific search queries beyond the one-page site — e.g.
  "wall panels Islamabad", "false ceiling Islamabad". Each article is a
  plain HTML file with its own title/meta/canonical/OG tags and
  `Article`/`BreadcrumbList` JSON-LD, and includes `js/data.js` +
  `js/guide.js` (a trimmed version of `applyBusinessFields()` — NOT the full
  `main.js`, since these pages don't have the catalogue/review DOM it
  expects). To add a 5th guide: copy an existing `guides/*.html` file, swap
  the content/meta/JSON-LD, add it to `sitemap.xml`, and link it from
  `guides/index.html` and the other guides' "More guides" section.

## Keeping a product spreadsheet

Since `data.js` is plain JS, it doubles as your spreadsheet — but if you'd
rather track products separately (e.g. in Excel/Google Sheets) before adding
them to code, keep columns: **Category, Subcategory, Sub-type, Product name,
Image filename, Short description**. That maps 1:1 onto the structure in
`data.js`, making hand-offs ("add these 10 new products") quick.

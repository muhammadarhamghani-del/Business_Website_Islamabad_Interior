# Interior Design Business Website

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser, or deploy
the folder as-is to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc).

## Files

- `index.html` — page structure only (no product content lives here)
- `css/styles.css` — all styling
- `js/data.js` — **single source of truth**: business info + full product catalogue
- `js/main.js` — renders everything in `index.html` from `data.js`

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

- `BUSINESS.siteUrl` in `js/data.js` is a **placeholder domain**. Once the
  site has a real domain, update it there, and in `robots.txt` and
  `sitemap.xml` (the `Sitemap:` line and `<loc>` respectively) — canonical
  tags, Open Graph `og:url`, and the LocalBusiness structured data all read
  from `siteUrl`.
- `js/main.js`'s `injectStructuredData()` builds a `LocalBusiness` JSON-LD
  block straight from `BUSINESS` (name, address, phone, geo coordinates,
  `areaServed`) — keep that object accurate and the schema stays correct.
- Every product/category image gets `Islamabad` appended to its `alt` text
  automatically (see `createMedia(...)` calls in `main.js`) — no per-product
  edits needed.
- `og:image` / `twitter:image` point at `assets/images/og-cover.jpg`, which
  doesn't exist yet — add a real 1200×630 image there for link previews to
  show a picture.
- Note: individual product tiles (leaf-level items with photos) only render
  into the page once a visitor clicks into a category — search engines that
  don't simulate that click won't see those specific product names. The
  category and sub-type names (e.g. "Wall Panel", "WPC", "25mm Imported")
  are rendered immediately on load and are crawlable. If long-tail search
  traffic on individual product names becomes a priority, that would need a
  bigger change (e.g. pre-rendering every product into the page).

## Keeping a product spreadsheet

Since `data.js` is plain JS, it doubles as your spreadsheet — but if you'd
rather track products separately (e.g. in Excel/Google Sheets) before adding
them to code, keep columns: **Category, Subcategory, Sub-type, Product name,
Image filename, Short description**. That maps 1:1 onto the structure in
`data.js`, making hand-offs ("add these 10 new products") quick.

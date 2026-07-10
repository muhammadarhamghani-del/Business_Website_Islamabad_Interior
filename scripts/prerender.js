/**
 * Build-time pre-renderer for index.html.
 *
 * The Overview cards, Product Catalogue panels, Reviews, FAQ, and the
 * LocalBusiness/FAQPage JSON-LD are normally built client-side by
 * js/main.js from js/data.js. That means a crawler or user that doesn't
 * execute JavaScript sees an empty page for all of that content.
 *
 * This script renders the exact same markup main.js would produce and
 * writes it directly into index.html, so the content ships in the raw
 * HTML response. js/main.js still runs on page load and stays in sync —
 * it detects the pre-rendered markup (via data-* attributes / existing
 * children) and wires up interactivity instead of re-creating the DOM,
 * so nothing is duplicated.
 *
 * Run this after any change to js/data.js, then commit the updated
 * index.html:
 *
 *   node scripts/prerender.js
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const { BUSINESS, REVIEWS, PRODUCT_CATALOGUE, FAQS, slugify } = require(path.join(ROOT, "js", "data.js"));

const STAR_ICON =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6z"/></svg>';

const WHATSAPP_ICON =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.4-.1-.5-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-1 2.2c0 1.3.9 2.6 1.1 2.8s1.7 2.6 4.1 3.6a13.7 13.7 0 001.4.5 3.3 3.3 0 001.5.1 2.4 2.4 0 001.6-1.1 2 2 0 00.1-1.1c-.1-.1-.3-.2-.5-.3z"/></svg>';

const PLACEHOLDER_ICON =
  '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5.5-5.5L7 19"/></svg>';

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function waHref(message) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
function productWaMessage(name) {
  return `Hi, I'm interested in "${name}". Could you share more details and pricing?`;
}

// Mirrors createMedia() in main.js, but resolves the "photo coming soon"
// fallback at build time by checking whether the image file actually
// exists on disk, instead of waiting for an onerror event in the browser.
function media(src, label) {
  const fileExists = fs.existsSync(path.join(ROOT, src));
  const imgStyle = fileExists ? "" : ' style="display:none"';
  const placeholderStyle = fileExists ? ' style="display:none"' : ' style="display:flex"';
  return (
    `<div class="card-media">` +
    `<img src="${esc(src)}" alt="${esc(label)}" loading="lazy"${imgStyle} />` +
    `<div class="img-placeholder"${placeholderStyle}>${PLACEHOLDER_ICON}<span>Photo coming soon</span></div>` +
    `</div>`
  );
}

function overviewCard(node) {
  const badge = node.comingSoon ? '<span class="card-badge">Coming Soon</span>' : "";
  return (
    `<button class="service-card" type="button" data-category-id="${esc(node.id)}">` +
    media(`assets/images/services/${node.id}.jpg`, `${node.name} in Islamabad`) +
    `<div class="card-body"><h3>${esc(node.name)}</h3><p>${esc(node.cardDesc)}</p>${badge}</div>` +
    `</button>`
  );
}

function productCard(item) {
  const href = waHref(productWaMessage(item.name));
  return (
    `<div class="product-card">` +
    media(item.image, `${item.name} in Islamabad`) +
    `<div class="card-body"><h4>${esc(item.name)}</h4><p>${esc(item.desc)}</p>` +
    `<div class="item-actions"><a class="btn btn-whatsapp btn-sm" href="${esc(href)}" target="_blank" rel="noopener">${WHATSAPP_ICON} Message on WhatsApp</a></div>` +
    `</div></div>`
  );
}

function galleryPanel(node, path_) {
  let html = `<div class="gallery-panel" data-leaf-id="${esc(node.id)}" hidden>`;
  html += `<h3 class="gallery-panel-title">${esc(path_.join(" — "))} in Islamabad</h3>`;

  if (node.relatedLinks && node.relatedLinks.length) {
    html += `<div class="gallery-combo"><p>${esc(node.comboIntro || "Select the combo of your choice")}</p><div class="gallery-combo-links">`;
    node.relatedLinks.forEach((link) => {
      html += `<button type="button" class="btn btn-gold" data-goto-id="${esc(link.id)}">${esc(link.label)}</button>`;
    });
    html += `</div></div>`;
  }

  if (!node.items || node.items.length === 0) {
    const href = waHref(productWaMessage(node.name));
    html +=
      `<div class="gallery-empty"><p>New products for <strong>${esc(node.name)}</strong> are on the way. Ask us directly and we'll help right away:</p>` +
      `<div class="item-actions"><a class="btn btn-whatsapp btn-sm" href="${esc(href)}" target="_blank" rel="noopener">${WHATSAPP_ICON} Message on WhatsApp</a></div></div>`;
  } else {
    node.items.forEach((item) => {
      html += productCard(item);
    });
  }

  html += `</div>`;
  return html;
}

function walkLeaves(nodes, path_, out) {
  nodes.forEach((node) => {
    const fullPath = [...path_, node.name];
    if (node.items !== undefined) {
      out.push(galleryPanel(node, fullPath));
    } else if (node.children) {
      walkLeaves(node.children, fullPath, out);
    }
  });
}

function buildOverviewHtml() {
  return PRODUCT_CATALOGUE.map(overviewCard).join("");
}

function buildGalleryHtml() {
  const panels = [];
  walkLeaves(PRODUCT_CATALOGUE, [], panels);
  return panels.join("");
}

function buildReviewsSummaryHtml() {
  return (
    `<span class="reviews-stars">${STAR_ICON.repeat(5)}</span>` +
    `<span class="reviews-score">${esc(REVIEWS.rating)}</span>` +
    `<a class="reviews-count" href="${esc(REVIEWS.url)}" target="_blank" rel="noopener">${esc(REVIEWS.count)} Google Reviews</a>`
  );
}

function buildReviewsGridHtml() {
  return REVIEWS.items
    .map(
      (review) =>
        `<div class="review-card"><div class="review-stars">${STAR_ICON.repeat(5)}</div>` +
        `<p class="review-text">${esc(review.text)}</p>` +
        `<div class="review-meta"><span class="review-name">${esc(review.name)}</span></div></div>`
    )
    .join("");
}

function buildFaqHtml() {
  return FAQS.map(
    (faq, index) =>
      `<details class="faq-item"${index === 0 ? " open" : ""}><summary>${esc(faq.q)}</summary><p>${esc(faq.a)}</p></details>`
  ).join("");
}

function buildLocalBusinessJsonLd() {
  const categoryNames = PRODUCT_CATALOGUE.map((c) => c.name);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    description: `${BUSINESS.tagline} — ${categoryNames.join(", ")} & more in Islamabad.`,
    image: [`${BUSINESS.siteUrl}/assets/images/og-cover.jpg`],
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    url: BUSINESS.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: BUSINESS.areaServed,
    hasMap: BUSINESS.mapsUrl,
    sameAs: [REVIEWS.url, BUSINESS.socials.tiktok, BUSINESS.socials.youtube, BUSINESS.socials.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.rating,
      reviewCount: REVIEWS.count,
    },
    review: REVIEWS.items.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    })),
    makesOffer: categoryNames.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${name} in Islamabad` },
    })),
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Replaces the content of `<div ...openTag>CONTENT</div>` with `replacement`.
// Rather than searching for the next literal "</div>" (which breaks on a
// second run, once the div contains its own nested closing tags), this
// anchors on `afterAnchor` — stable text that immediately follows the div's
// true closing tag in the template (e.g. the next sibling's opening tag, or
// the enclosing section's closing tags) — and rebuilds "</div>" + afterAnchor
// itself, so it's safe to run repeatedly.
function replaceDivContent(html, openTag, afterAnchor, replacement) {
  const start = html.indexOf(openTag);
  if (start === -1) throw new Error(`Marker not found: ${openTag}`);
  const contentStart = start + openTag.length;
  const anchorIdx = html.indexOf(afterAnchor, contentStart);
  if (anchorIdx === -1) throw new Error(`After-anchor not found after ${openTag}: ${afterAnchor}`);
  return html.slice(0, contentStart) + replacement + `</div>` + html.slice(anchorIdx);
}

function main() {
  const indexPath = path.join(ROOT, "index.html");
  // Normalize to LF for all the string-anchored replacements below, then
  // restore CRLF (the file's native line ending) before writing back out.
  let html = fs.readFileSync(indexPath, "utf8").replace(/\r\n/g, "\n");

  html = replaceDivContent(
    html,
    `<div class="card-grid" id="overviewGrid">`,
    `\n      </div>\n    </section>`,
    buildOverviewHtml()
  );

  html = replaceDivContent(
    html,
    `<div class="reviews-summary" id="reviewsSummary">`,
    `\n        <div class="reviews-grid" id="reviewsGrid">`,
    buildReviewsSummaryHtml()
  );

  html = replaceDivContent(
    html,
    `<div class="reviews-grid" id="reviewsGrid">`,
    `\n      </div>\n    </section>`,
    buildReviewsGridHtml()
  );

  html = replaceDivContent(
    html,
    `<div class="faq-list" id="faqList">`,
    `\n      </div>\n    </section>`,
    buildFaqHtml()
  );

  // Gallery panels are appended after the placeholder, inside #gallery.
  // Everything between the "rendered by main.js" comment and the closing
  // </div> of #gallery (12-space indent, matching .catalogue-panel >
  // .gallery in index.html) is replaced with the generated panels — this
  // also cleanly overwrites panels from a previous run of this script.
  const commentMarker = `<!-- product panels for every category are rendered by main.js -->`;
  const commentIdx = html.indexOf(commentMarker);
  if (commentIdx === -1) throw new Error("Gallery panels comment marker not found");
  const afterComment = commentIdx + commentMarker.length;
  const closeTagMarker = `\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>`;
  const closeIdx = html.indexOf(closeTagMarker, afterComment);
  if (closeIdx === -1) throw new Error("Gallery section closing marker not found");
  html = html.slice(0, afterComment) + "\n" + buildGalleryHtml() + html.slice(closeIdx);

  // Static JSON-LD in <head>, kept in sync by id so main.js can update
  // in place at runtime instead of appending duplicates.
  const localBusinessJson = JSON.stringify(buildLocalBusinessJsonLd());
  const faqJson = JSON.stringify(buildFaqJsonLd());
  const ldBlock =
    `<script type="application/ld+json" id="ld-localbusiness">${localBusinessJson}</script>\n` +
    `  <script type="application/ld+json" id="ld-faqpage">${faqJson}</script>\n`;

  if (html.includes('id="ld-localbusiness"')) {
    html = html.replace(
      /<script type="application\/ld\+json" id="ld-localbusiness">[\s\S]*?<\/script>\s*<script type="application\/ld\+json" id="ld-faqpage">[\s\S]*?<\/script>\s*/,
      ldBlock
    );
  } else {
    html = html.replace(`</head>`, `  ${ldBlock}</head>`);
  }

  fs.writeFileSync(indexPath, html.replace(/\n/g, "\r\n"), "utf8");
  console.log("index.html pre-rendered:");
  console.log(`  - ${PRODUCT_CATALOGUE.length} overview cards`);
  let leafCount = 0,
    productCount = 0;
  (function count(nodes) {
    nodes.forEach((n) => {
      if (n.items !== undefined) {
        leafCount++;
        productCount += n.items.length;
      } else if (n.children) count(n.children);
    });
  })(PRODUCT_CATALOGUE);
  console.log(`  - ${leafCount} gallery panels / ${productCount} products`);
  console.log(`  - ${REVIEWS.items.length} reviews`);
  console.log(`  - ${FAQS.length} FAQ items`);
  console.log(`  - LocalBusiness + FAQPage JSON-LD`);
}

main();

/**
 * Renders the whole site from SITE_DATA (js/data.js). No product/category
 * markup lives in index.html — everything below reads the config and
 * builds DOM from it, so editing data.js is enough to change the site.
 */
(function () {
  "use strict";

  const { BUSINESS, REVIEWS, PRODUCT_CATALOGUE, FAQS } = window.SITE_DATA;

  const PLACEHOLDER_ICON = `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <circle cx="8.5" cy="10" r="1.5"/>
      <path d="M21 16l-5.5-5.5L7 19"/>
    </svg>`;

  const STAR_ICON = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6z"/>
    </svg>`;

  const WHATSAPP_ICON = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.4-.1-.5-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-1 2.2c0 1.3.9 2.6 1.1 2.8s1.7 2.6 4.1 3.6a13.7 13.7 0 001.4.5 3.3 3.3 0 001.5.1 2.4 2.4 0 001.6-1.1 2 2 0 00.1-1.1c-.1-.1-.3-.2-.5-.3z"/>
    </svg>`;

  // ---- scroll-reveal (subtle fade/rise-in as content enters the viewport) ----
  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealObserver = REDUCED_MOTION
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

  function reveal(el, delayMs) {
    if (!el || REDUCED_MOTION) return;
    el.classList.add("reveal");
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;
    revealObserver.observe(el);
  }

  // ---- helpers ----
  function waHref(message) {
    return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
  }
  function genericWaMessage() {
    return `Hi, I'd like to know more about your interior design services.`;
  }
  function productWaMessage(name) {
    return `Hi, I'm interested in "${name}". Could you share more details and pricing?`;
  }

  // Builds a media box: <img> that falls back to a placeholder tile if the
  // file at `src` doesn't exist yet (so config can reference photos ahead
  // of them actually being uploaded).
  function createMedia(src, label) {
    const wrap = document.createElement("div");
    wrap.className = "card-media";

    const img = document.createElement("img");
    img.src = src;
    img.alt = label;
    img.loading = "lazy";

    const placeholder = document.createElement("div");
    placeholder.className = "img-placeholder";
    placeholder.style.display = "none";
    placeholder.innerHTML = `${PLACEHOLDER_ICON}<span>Photo coming soon</span>`;

    img.addEventListener("error", () => {
      img.style.display = "none";
      placeholder.style.display = "flex";
    });

    wrap.appendChild(img);
    wrap.appendChild(placeholder);
    return wrap;
  }

  function createActions(name) {
    const wrap = document.createElement("div");
    wrap.className = "item-actions";

    const wa = document.createElement("a");
    wa.className = "btn btn-whatsapp btn-sm";
    wa.href = waHref(productWaMessage(name));
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.innerHTML = `${WHATSAPP_ICON} Message on WhatsApp`;

    wrap.appendChild(wa);
    return wrap;
  }

  // ---- SEO: LocalBusiness structured data (built from BUSINESS/PRODUCT_CATALOGUE/REVIEWS so it never drifts) ----
  function injectStructuredData() {
    const categoryNames = PRODUCT_CATALOGUE.map((c) => c.name);
    const data = {
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
      // Mirrors the reviews actually shown in the Reviews section below —
      // same names/text/star count, so this matches Google's structured
      // data policy that markup must reflect visible on-page content.
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
    // scripts/prerender.js bakes this same JSON-LD into index.html at build
    // time (id="ld-localbusiness"/"ld-faqpage") so it's present without JS.
    // If that ran, update the existing tag in place instead of appending a
    // duplicate; otherwise (e.g. a guide page, or a stale/unbuilt copy)
    // create it fresh so structured data is never missing.
    function setJsonLd(id, payload) {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(payload);
    }

    setJsonLd("ld-localbusiness", data);

    // FAQPage schema — mirrors the visible FAQ section rendered below.
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    setJsonLd("ld-faqpage", faqData);
  }

  // ---- FAQ section ----
  // scripts/prerender.js bakes this same markup into index.html at build
  // time, so <details>/<summary> works with zero JS. If it's already there
  // (build ran), skip re-rendering — otherwise build it as before.
  function renderFAQs() {
    const list = document.getElementById("faqList");
    if (list.children.length > 0) return;
    FAQS.forEach((faq, index) => {
      const item = document.createElement("details");
      item.className = "faq-item";
      if (index === 0) item.open = true;

      const summary = document.createElement("summary");
      summary.textContent = faq.q;

      const answer = document.createElement("p");
      answer.textContent = faq.a;

      item.appendChild(summary);
      item.appendChild(answer);
      list.appendChild(item);
      reveal(item, (index % 3) * 70);
    });
  }

  // ---- business fields (header, hero, contact, footer) ----
  function applyBusinessFields() {
    document.querySelectorAll("[data-field]").forEach((el) => {
      const field = el.dataset.field;
      switch (field) {
        case "whatsappHrefGeneric":
          el.href = waHref(genericWaMessage());
          break;
        case "mapEmbedSrc":
          el.src = BUSINESS.mapEmbedSrc;
          break;
        case "mapsUrl":
          el.href = BUSINESS.mapsUrl;
          break;
        case "emailHref":
          el.href = `mailto:${BUSINESS.email}`;
          if (el.dataset.fieldText) el.textContent = BUSINESS[el.dataset.fieldText];
          break;
        case "socialTiktokHref":
          el.href = BUSINESS.socials.tiktok;
          break;
        case "socialYoutubeHref":
          el.href = BUSINESS.socials.youtube;
          break;
        case "socialFacebookHref":
          el.href = BUSINESS.socials.facebook;
          break;
        default:
          if (BUSINESS[field] !== undefined) el.textContent = BUSINESS[field];
      }
    });
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ---- index catalogue nodes by id for fast lookup + breadcrumb paths ----
  const NODE_INDEX = new Map();
  function indexNodes(nodes, path, ancestorIds) {
    nodes.forEach((node) => {
      const fullPath = [...path, node.name];
      NODE_INDEX.set(node.id, { node, path: fullPath, ancestorIds });
      if (node.children) indexNodes(node.children, fullPath, [...ancestorIds, node.id]);
    });
  }
  indexNodes(PRODUCT_CATALOGUE, [], []);

  function firstLeafId(node) {
    if (node.items !== undefined) return node.id;
    return firstLeafId(node.children[0]);
  }

  // ---- Section 1: overview cards ----
  // scripts/prerender.js bakes this same markup into index.html at build
  // time (each card tagged data-category-id). If it's already there, reuse
  // those elements and just wire up the click handler instead of rebuilding.
  function renderOverview() {
    const grid = document.getElementById("overviewGrid");
    const prerendered = grid.children.length > 0;
    PRODUCT_CATALOGUE.forEach((node, index) => {
      let card;
      if (prerendered) {
        card = grid.querySelector(`[data-category-id="${node.id}"]`);
        if (!card) return;
      } else {
        card = document.createElement("button");
        card.className = "service-card";
        card.type = "button";

        const media = createMedia(`assets/images/services/${node.id}.jpg`, `${node.name} in Islamabad`);
        card.appendChild(media);

        const body = document.createElement("div");
        body.className = "card-body";
        body.innerHTML = `
          <h3>${node.name}</h3>
          <p>${node.cardDesc}</p>
          ${node.comingSoon ? '<span class="card-badge">Coming Soon</span>' : ""}
        `;
        card.appendChild(body);
        grid.appendChild(card);
        reveal(card, (index % 4) * 70);
      }
      card.addEventListener("click", () => goToCategory(node.id));
    });
  }

  // ---- Testimonials (Google reviews) ----
  // scripts/prerender.js bakes this same markup into index.html at build
  // time. If it's already there (build ran), skip re-rendering.
  function renderTestimonials() {
    const summary = document.getElementById("reviewsSummary");
    const grid = document.getElementById("reviewsGrid");
    if (summary.children.length > 0 || grid.children.length > 0) return;

    summary.innerHTML = `
      <span class="reviews-stars">${STAR_ICON.repeat(5)}</span>
      <span class="reviews-score">${REVIEWS.rating}</span>
      <a class="reviews-count" href="${REVIEWS.url}" target="_blank" rel="noopener">${REVIEWS.count} Google Reviews</a>
    `;

    REVIEWS.items.forEach((review, index) => {
      const card = document.createElement("div");
      card.className = "review-card";
      card.innerHTML = `
        <div class="review-stars">${STAR_ICON.repeat(5)}</div>
        <p class="review-text">${review.text}</p>
        <div class="review-meta">
          <span class="review-name">${review.name}</span>
        </div>
      `;
      grid.appendChild(card);
      reveal(card, (index % 3) * 70);
    });
  }

  function goToCategory(topId) {
    const entry = NODE_INDEX.get(topId);
    const targetLeafId = entry.node.items !== undefined ? topId : firstLeafId(entry.node);

    document.getElementById("products").scrollIntoView({ behavior: "smooth" });

    if (window.innerWidth < 900) {
      document.getElementById("catalogueTree").classList.add("open");
      document.getElementById("treeToggle").setAttribute("aria-expanded", "true");
    }

    selectLeaf(targetLeafId);
  }

  // ---- Section 2: sidebar tree ----
  const TREE_DOM = new Map(); // id -> { btn, childrenEl }
  let activeBtn = null;

  function renderTree(nodes) {
    const ul = document.createElement("ul");
    nodes.forEach((node) => ul.appendChild(renderTreeNode(node)));
    return ul;
  }

  function renderTreeNode(node) {
    const li = document.createElement("li");
    li.className = "tree-node";

    const row = document.createElement("div");
    row.className = "tree-row";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tree-btn";
    const isBranch = !!node.children;
    if (!isBranch) btn.classList.add("leaf");

    btn.innerHTML = `<span>${node.name}${node.comingSoon ? ' <span class="tree-badge">Soon</span>' : ""}</span><span class="chevron">›</span>`;

    row.appendChild(btn);
    li.appendChild(row);

    let childrenEl = null;
    if (isBranch) {
      btn.setAttribute("aria-expanded", "false");
      childrenEl = renderTree(node.children);
      childrenEl.className = "tree-children";
      li.appendChild(childrenEl);

      btn.addEventListener("click", () => {
        const open = childrenEl.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
      });
    } else {
      btn.addEventListener("click", () => selectLeaf(node.id));
    }

    TREE_DOM.set(node.id, { btn, childrenEl });
    return li;
  }

  function expandAncestors(ancestorIds) {
    ancestorIds.forEach((id) => {
      const entry = TREE_DOM.get(id);
      if (entry && entry.childrenEl) {
        entry.childrenEl.classList.add("open");
        entry.btn.setAttribute("aria-expanded", "true");
      }
    });
  }

  function selectLeaf(id) {
    const entry = NODE_INDEX.get(id);
    if (!entry) return;
    const { path, ancestorIds } = entry;

    if (activeBtn) activeBtn.classList.remove("active");
    const domEntry = TREE_DOM.get(id);
    if (domEntry) {
      domEntry.btn.classList.add("active");
      activeBtn = domEntry.btn;
    }
    expandAncestors(ancestorIds);

    const placeholder = document.getElementById("galleryPlaceholder");
    if (placeholder) placeholder.hidden = true;

    renderBreadcrumb(path);
    showGalleryPanel(id);

    if (window.innerWidth < 900) {
      document.getElementById("catalogueTree").classList.remove("open");
      document.getElementById("treeToggle").setAttribute("aria-expanded", "false");
      document.querySelector(".catalogue-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderBreadcrumb(path) {
    const el = document.getElementById("breadcrumb");
    const parts = ["Products", ...path];
    el.innerHTML = parts
      .map((p, i) => (i === parts.length - 1 ? `<span>${p}</span>` : `<span>${p}</span><span class="sep">/</span>`))
      .join("");
  }

  // Builds one leaf category's product markup into `panel`. Called once per
  // leaf at load time (see renderAllGalleryPanels) rather than per click, so
  // every product's name/description/image is present in the page's initial
  // HTML for search engines to index — only the active panel is visible to
  // users, the rest are toggled with the `hidden` attribute (same pattern
  // browsers/Google already treat as fully-indexable, e.g. tabs & accordions).
  function buildGalleryPanel(panel, node, path) {
    const heading = document.createElement("h3");
    heading.className = "gallery-panel-title";
    heading.textContent = `${path.join(" — ")} in Islamabad`;
    panel.appendChild(heading);

    if (node.relatedLinks && node.relatedLinks.length) {
      const combo = document.createElement("div");
      combo.className = "gallery-combo";

      const p = document.createElement("p");
      p.textContent = node.comboIntro || "Select the combo of your choice";
      combo.appendChild(p);

      const linksWrap = document.createElement("div");
      linksWrap.className = "gallery-combo-links";
      node.relatedLinks.forEach((link) => {
        const a = document.createElement("button");
        a.type = "button";
        a.className = "btn btn-gold";
        a.textContent = link.label;
        a.addEventListener("click", () => goToCategory(link.id));
        linksWrap.appendChild(a);
      });
      combo.appendChild(linksWrap);

      panel.appendChild(combo);
    }

    if (!node.items || node.items.length === 0) {
      const empty = document.createElement("div");
      empty.className = "gallery-empty";
      empty.innerHTML = `<p>New products for <strong>${node.name}</strong> are on the way. Ask us directly and we'll help right away:</p>`;
      empty.appendChild(createActions(node.name));
      panel.appendChild(empty);
      return;
    }

    node.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.appendChild(createMedia(item.image, `${item.name} in Islamabad`));

      const body = document.createElement("div");
      body.className = "card-body";
      const h4 = document.createElement("h4");
      h4.textContent = item.name;
      const p = document.createElement("p");
      p.textContent = item.desc;
      body.appendChild(h4);
      body.appendChild(p);
      body.appendChild(createActions(item.name));

      card.appendChild(body);
      panel.appendChild(card);
    });
  }

  // id -> { panel, cards } for every leaf category, built once at load.
  const GALLERY_PANELS = new Map();
  let activePanel = null;

  // scripts/prerender.js bakes every leaf category's panel markup into
  // index.html at build time (data-leaf-id + data-goto-id attributes), so
  // every product's name/description/image ships in the raw HTML. If that
  // ran, reuse those panels (just wire up combo-link buttons) instead of
  // rebuilding — otherwise (build not run) build them client-side as before.
  function renderAllGalleryPanels() {
    const gallery = document.getElementById("gallery");
    const prerendered = gallery.querySelector(".gallery-panel") !== null;
    NODE_INDEX.forEach(({ node, path }, id) => {
      if (node.items === undefined) return; // branch node, not a leaf
      let panel;
      if (prerendered) {
        panel = gallery.querySelector(`[data-leaf-id="${id}"]`);
        if (!panel) return;
        panel.querySelectorAll("[data-goto-id]").forEach((btn) => {
          btn.addEventListener("click", () => goToCategory(btn.dataset.gotoId));
        });
      } else {
        panel = document.createElement("div");
        panel.className = "gallery-panel";
        panel.dataset.leafId = id;
        panel.hidden = true;
        buildGalleryPanel(panel, node, path);
        gallery.appendChild(panel);
      }
      GALLERY_PANELS.set(id, panel);
    });
  }

  function showGalleryPanel(id) {
    if (activePanel) activePanel.hidden = true;
    const panel = GALLERY_PANELS.get(id);
    if (!panel) return;
    panel.hidden = false;
    activePanel = panel;
    // Cards were built while hidden, so the reveal observer never got a
    // chance to fire on them — reveal (or re-show) them now that they're visible.
    panel.querySelectorAll(".product-card, .gallery-empty").forEach((card, index) => {
      card.classList.remove("reveal", "reveal-visible");
      reveal(card, (index % 4) * 70);
    });
  }

  function renderInitialGalleryState() {
    document.getElementById("breadcrumb").innerHTML = "<span>Products</span>";
  }

  // ---- nav toggles ----
  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const mobileNav = document.getElementById("main-nav-mobile");
    toggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  function setupTreeToggle() {
    const toggle = document.getElementById("treeToggle");
    const sidebar = document.getElementById("catalogueTree");
    toggle.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Static markup already has class="reveal" baked in (section titles/subs) —
  // wire those up too, since reveal() above only covers JS-generated cards.
  function revealStaticElements() {
    document.querySelectorAll(".reveal").forEach((el) => {
      if (REDUCED_MOTION) {
        el.classList.add("reveal-visible");
      } else {
        revealObserver.observe(el);
      }
    });
  }

  // ---- init ----
  document.addEventListener("DOMContentLoaded", () => {
    applyBusinessFields();
    injectStructuredData();
    renderOverview();
    renderTestimonials();
    renderFAQs();
    revealStaticElements();
    document.getElementById("catalogueTree").appendChild(renderTree(PRODUCT_CATALOGUE));
    renderAllGalleryPanels();
    renderInitialGalleryState();
    setupNav();
    setupTreeToggle();
  });
})();

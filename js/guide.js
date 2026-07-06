/**
 * Lightweight business-field wiring for standalone /guides/ pages.
 * These pages don't have the catalogue/reviews DOM that main.js expects,
 * so they use this trimmed-down script instead of the full main.js —
 * same BUSINESS single source of truth (js/data.js), just no catalogue
 * rendering.
 */
(function () {
  "use strict";

  const { BUSINESS } = window.SITE_DATA;

  function waHref(message) {
    return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  function applyBusinessFields() {
    document.querySelectorAll("[data-field]").forEach((el) => {
      const field = el.dataset.field;
      switch (field) {
        case "whatsappHrefGeneric":
          el.href = waHref(`Hi, I'd like to know more about your interior design services.`);
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
        default:
          if (BUSINESS[field] !== undefined) el.textContent = BUSINESS[field];
      }
    });
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const mobileNav = document.getElementById("main-nav-mobile");
    if (!toggle || !mobileNav) return;
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

  document.addEventListener("DOMContentLoaded", () => {
    applyBusinessFields();
    setupNav();
  });
})();

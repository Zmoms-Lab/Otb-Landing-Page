const LANG_KEY = "site_lang";

let currentLang = localStorage.getItem(LANG_KEY) || "en";
let i18n = {};

document.addEventListener("DOMContentLoaded", async () => {
  await loadLangFile();
  applyLangUI();
});

async function loadLangFile() {
  const res = await fetch("./locale/lang.json");
  i18n = await res.json();
}

function toggleLang() {
  currentLang = currentLang === "en" ? "vi" : "en";
  localStorage.setItem(LANG_KEY, currentLang);
  applyLangUI();
}

function applyLangUI() {
  const lang = i18n[currentLang];
  if (!lang) return;

  // ===== LOGO =====
  const title = document.querySelector(".logo-txt strong");
  const subtitle = document.querySelector(".logo-txt span");

  if (title) title.innerText = lang.logo.title;
  if (subtitle) subtitle.innerText = lang.logo.subtitle;

  // ===== NAV =====
  document.querySelectorAll(".nav-a").forEach((btn) => {
    const key = btn.getAttribute("data-nav");
    if (lang.nav[key]) {
      btn.innerText = lang.nav[key];
    }
  });

  // ===== CTA BUTTON =====
  const cta = document.querySelector(".btn-pri");
  if (cta) {
    cta.innerHTML = `
      ${lang.nav.cta}
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    `;
  }

  // ===== LANGUAGE BUTTON =====
  const btn = document.getElementById("langBtn");
  if (btn) btn.innerText = currentLang.toUpperCase();
}

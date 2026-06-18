const LANG_KEY = "site_lang";

let currentLang = localStorage.getItem(LANG_KEY) || "en";
let i18n = {};

document.addEventListener("DOMContentLoaded", async () => {
  await loadLangFile();
  applyLangUI();
  renderProducts();
});

async function loadLangFile() {
  const res = await fetch("./locale/lang.json");
  i18n = await res.json();
}

function toggleLang() {
  currentLang = currentLang === "en" ? "vi" : "en";

  localStorage.setItem(LANG_KEY, currentLang);

  applyLangUI();
  renderProducts();
}

function applyLangUI() {
  const lang = i18n[currentLang];

  if (!lang) return;

  const title = document.querySelector(".logo-txt strong");

  const subtitle = document.querySelector(".logo-txt span");

  if (title) title.innerText = lang.logo.title;

  if (subtitle) subtitle.innerText = lang.logo.subtitle;

  document.querySelectorAll(".nav-a").forEach((btn) => {
    const key = btn.getAttribute("data-nav");

    if (lang.nav[key]) {
      btn.innerText = lang.nav[key];
    }
  });

  const navCTA = document.querySelector(".nav-cta");

  if (navCTA) {
    navCTA.innerText = lang.nav.cta;
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    const value = key.split(".").reduce((obj, k) => obj?.[k], lang);

    if (value) {
      el.innerText = value;
    }
  });

  const heroCTA = document.querySelector(".phero .btn-pri");

  if (heroCTA) {
    heroCTA.innerHTML = `
      ${lang.hero.cta}

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >

        <path 
          d="M5 12h14M13 6l6 6-6 6"
        />

      </svg>
    `;
  }

  const footer = lang.footer;

  if (footer) {
    document
      .getElementById("footer")
      ?.querySelectorAll("[data-footer]")
      .forEach((el) => {
        const key = el.getAttribute("data-footer");

        if (footer[key]) {
          el.innerText = footer[key];
        }
      });
  }

  const btn = document.getElementById("langBtn");

  if (btn) {
    btn.innerText = currentLang.toUpperCase();
  }
}

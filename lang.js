function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-hi]").forEach(el => {
    const text = el.getAttribute("data-" + lang);
    if (text) {
      el.textContent = text;
    }
  });

// Re-run filters after language change (if filter exists)
if (typeof filterItems === "function") {
  filterItems();
}
  
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "hi";
  setLang(savedLang);
});


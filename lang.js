function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-hi]").forEach(el => {
    const text = el.getAttribute("data-" + lang);
    if (text) {
      el.textContent = text;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "hi";
  setLang(savedLang);
});

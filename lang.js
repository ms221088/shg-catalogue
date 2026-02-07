function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-hi]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
}

window.addEventListener("load", () => {
  const lang = localStorage.getItem("lang") || "hi";
  setLang(lang);
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage();
}

function applyLanguage() {
  const lang = localStorage.getItem("lang") || "hi";
  document.querySelectorAll("[data-hi]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

window.onload = applyLanguage;

function filterItems() {
  const cat = document.getElementById("fCategory")?.value || "";
  const block = document.getElementById("fBlock")?.value || "";

  document.querySelectorAll(".card").forEach(card => {
    const show =
      (cat === "" || card.dataset.category === cat) &&
      (block === "" || card.dataset.block === block);

    card.style.display = show ? "flex" : "none";
  });
}

function goBack() {
  if (document.referrer) {
    history.back();
  } else {
    location.href = "index.html";
  }
}

// Breadcrumb current page label
document.addEventListener("DOMContentLoaded", () => {
  const current = document.querySelector(".breadcrumb .current");
  if (!current) return;

  const pageMap = {
    "products.html": { hi: "उत्पाद", en: "Products" },
    "services.html": { hi: "सेवाएँ", en: "Services" },
    "about.html": { hi: "हमारे बारे में", en: "About Us" },
    "contact.html": { hi: "संपर्क करें", en: "Contact" }
  };

  const page = location.pathname.split("/").pop();
  const lang = localStorage.getItem("lang") || "hi";

  if (pageMap[page]) {
    current.textContent = pageMap[page][lang];
  }
});

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("open");
  }
}

function setLang(lang) {
  // Find all elements with a data attribute for this language
  document.querySelectorAll("[data-hi][data-en]").forEach(elem => {
    elem.innerText = elem.getAttribute(`data-${lang}`);
  });
}




function filterItems() {
  const cat = document.getElementById("fCategory")?.value || "";
  const sub = document.getElementById("fSubcategory")?.value || "";
  const block = document.getElementById("fBlock")?.value || "";
  const search = document.getElementById("fSearch")?.value.toLowerCase() || "";

  let visibleCount = 0;

  document.querySelectorAll(".card").forEach(card => {

    const matchCategory = !cat || card.dataset.category === cat;
    const matchSub = !sub || card.dataset.subcategory === sub;
    const matchBlock = !block || card.dataset.block === block;
    const matchSearch = !search || card.dataset.name.includes(search);

    const show = matchCategory && matchSub && matchBlock && matchSearch;

    card.style.display = show ? "flex" : "none";

    if (show) visibleCount++;
  });

  document.getElementById("resultCount").textContent =
    visibleCount + " product(s) found";

  document.getElementById("noResults").style.display =
    visibleCount === 0 ? "block" : "none";
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














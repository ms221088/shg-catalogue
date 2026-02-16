/* =====================================
   FILTER FUNCTION
===================================== */
function filterItems() {
  const cat = document.getElementById("fCategory")?.value || "";
  const sub = document.getElementById("fSubcategory")?.value || "";
  const block = document.getElementById("fBlock")?.value || "";
  const search = document.getElementById("fSearch")?.value.toLowerCase() || "";

  let visibleCount = 0;

  document.querySelectorAll(".card").forEach(card => {

    const categoryList = card.dataset.category
      ? card.dataset.category.split(',')
      : [];

    const subList = card.dataset.subcategory
      ? card.dataset.subcategory.split(',')
      : [];

    const matchCategory = !cat || categoryList.includes(cat);
    const matchSub = !sub || subList.includes(sub);
    const matchBlock = !block || card.dataset.block === block;
    const matchSearch = !search || card.dataset.name.toLowerCase().includes(search);

    const show = matchCategory && matchSub && matchBlock && matchSearch;

    card.style.display = show ? "flex" : "none";

    if (show) visibleCount++;
  });

  updateResultMessage(visibleCount);

  const noResults = document.getElementById("noResults");
  if (noResults) {
    noResults.style.display = visibleCount === 0 ? "block" : "none";
  }
}


/* =====================================
   RESULT MESSAGE
===================================== */
function updateResultMessage(count) {
  const lang = localStorage.getItem("lang") || "hi";

  let message = "";

  if (lang === "hi") {
    message = count === 1
      ? "1 परिणाम मिला"
      : count + " परिणाम मिले";
  } else {
    message = count === 1
      ? "1 result found"
      : count + " results found";
  }

  const resultEl = document.getElementById("resultCount");
  if (resultEl) {
    resultEl.textContent = message;
  }
}


/* =====================================
   GO BACK
===================================== */
function goBack() {
  if (document.referrer) {
    history.back();
  } else {
    location.href = "index.html";
  }
}


/* =====================================
   ACTIVE NAVIGATION (GitHub Safe)
===================================== */
document.addEventListener("DOMContentLoaded", function () {

  let path = window.location.pathname;

  // If homepage (project root)
  if (path.endsWith("/") || path.split("/").pop() === "") {
    path = "index.html";
  } else {
    path = path.split("/").pop();
  }

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === path) {
      link.classList.add("active");
    }
  });

});


/* =====================================
   MOBILE MENU
===================================== */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("open");
  }
}

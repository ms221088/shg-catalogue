/* =====================================================
   CATALOGUE ENGINE
   -----------------------------------------------------
   Turns a data file (ITEMS array) + label maps into:
     1. Filter dropdown options (Category / Subcategory / Block)
     2. Product/Service cards
     3. Bilingual (Hindi + English) search

   You should NOT need to edit this file when adding or
   updating a product/service. Edit the data file instead
   (data-products.js or data-services.js).
===================================================== */

let CURRENT_ITEMS = [];

/**
 * Call this once per listing page after the data file has loaded.
 * @param {Array} items - the ITEMS array from data-products.js / data-services.js
 * @param {Object} labels - { category: {value:{hi,en}}, subcategory: {value:{hi,en}} }
 */
function initCatalogue(items, labels) {
  CURRENT_ITEMS = items;

  buildFilterOptions("fCategory", uniqueValues(items, "category"), labels.category);
  buildFilterOptions("fSubcategory", uniqueValues(items, "subcategory"), labels.subcategory);
  buildFilterOptions("fBlock", uniqueValues(items, "block"), BLOCK_LABELS);

  renderCards(items);
  filterItems();
}

/* Collect the distinct values used across all items for a given field.
   Fields "category"/"subcategory" are arrays on each item; "block" is a single string. */
function uniqueValues(items, field) {
  const set = new Set();
  items.forEach(item => {
    const val = item[field];
    if (Array.isArray(val)) {
      val.forEach(v => set.add(v));
    } else if (val) {
      set.add(val);
    }
  });
  return Array.from(set);
}

/* Populate a <select id="..."> with an "All" option plus one option per value,
   using the bilingual label map. If a value has no label entry, its raw key
   is shown as a fallback (so nothing silently disappears). */
function buildFilterOptions(selectId, values, labelMap) {
  const select = document.getElementById(selectId);
  if (!select) return;

  select.innerHTML = "";

  const allOpt = document.createElement("option");
  allOpt.value = "";
  allOpt.setAttribute("data-hi", "सभी");
  allOpt.setAttribute("data-en", "All");
  allOpt.textContent = "All";
  select.appendChild(allOpt);

  values
    .sort((a, b) => a.localeCompare(b))
    .forEach(val => {
      const label = (labelMap && labelMap[val]) || { hi: val, en: val };
      const opt = document.createElement("option");
      opt.value = val;
      opt.setAttribute("data-hi", label.hi);
      opt.setAttribute("data-en", label.en);
      opt.textContent = label.en;
      select.appendChild(opt);
    });
}

/* Build one .card element for an item. */
function buildCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.category = item.category.join(",");
  card.dataset.subcategory = item.subcategory.join(",");
  card.dataset.block = item.block;

  const textWrap = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.setAttribute("data-hi", item.title.hi);
  h3.setAttribute("data-en", item.title.en);
  textWrap.appendChild(h3);

  (item.details || []).forEach(line => {
    if (!line.hi && !line.en) return;
    const p = document.createElement("p");
    p.setAttribute("data-hi", line.hi);
    p.setAttribute("data-en", line.en);
    textWrap.appendChild(p);
  });

  card.appendChild(textWrap);

  const img = document.createElement("img");
  img.src = item.image || "";
  img.alt = item.imageAlt || item.title.en || "";
  img.loading = "lazy";
  card.appendChild(img);

  return card;
}

function renderCards(items) {
  const container = document.getElementById("cardsContainer");
  if (!container) return;
  container.innerHTML = "";
  items.forEach(item => container.appendChild(buildCard(item)));
}

/* Build one lowercase, language-agnostic search blob per item so typing
   in Hindi OR English both work, regardless of which language is
   currently displayed on screen. */
function searchBlob(item) {
  const parts = [
    item.title.hi, item.title.en,
    ...(item.details || []).flatMap(l => [l.hi, l.en])
  ];
  return parts.filter(Boolean).join(" ").toLowerCase();
}

/* =====================================================
   FILTER FUNCTION (replaces the old script.js version)
===================================================== */
function filterItems() {
  const cat = document.getElementById("fCategory")?.value || "";
  const sub = document.getElementById("fSubcategory")?.value || "";
  const block = document.getElementById("fBlock")?.value || "";
  const search = (document.getElementById("fSearch")?.value || "").trim().toLowerCase();

  const cards = document.querySelectorAll("#cardsContainer .card");
  let visibleCount = 0;

  cards.forEach((card, i) => {
    const item = CURRENT_ITEMS[i];
    if (!item) return;

    const matchCategory = !cat || item.category.includes(cat);
    const matchSub = !sub || item.subcategory.includes(sub);
    const matchBlock = !block || item.block === block;
    const matchSearch = !search || searchBlob(item).includes(search);

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

function updateResultMessage(count) {
  const lang = localStorage.getItem("lang") || "hi";
  let message = "";

  if (lang === "hi") {
    message = count === 1 ? "1 परिणाम मिला" : count + " परिणाम मिले";
  } else {
    message = count === 1 ? "1 result found" : count + " results found";
  }

  const resultEl = document.getElementById("resultCount");
  if (resultEl) resultEl.textContent = message;
}

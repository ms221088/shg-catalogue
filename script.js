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
  history.back();
}

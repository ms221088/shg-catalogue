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



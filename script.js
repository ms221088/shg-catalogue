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
function highlightActiveNav() {
  let path = window.location.pathname;

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
}


/* =====================================
   MOBILE MENU
===================================== */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("open");
  }
}

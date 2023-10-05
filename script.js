const btnNavEl = document.querySelector(".navbar-toggler");
const btnCloseEl = document.querySelector(".close-icon");
const headerEl = document.querySelector(".sidebar");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-openz");
});

btnCloseEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-openz");
});

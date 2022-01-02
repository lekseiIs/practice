const humburger = document.querySelector(".menu-btn");
const menu = document.querySelector(".navigation");
humburger.addEventListener("click", (e) => {
  menu.classList.toggle("_active-menu");
});

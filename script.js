const hamMenu = document.querySelector(".ham-menu");
const closeMenu = document.querySelector(".ham-close");
const offScreenMenu = document.querySelector(".off-screen-menu");
const blurEffect = document.querySelector(".blur");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  blurEffect.classList.toggle("active");
});
closeMenu.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  blurEffect.classList.remove("active");
});

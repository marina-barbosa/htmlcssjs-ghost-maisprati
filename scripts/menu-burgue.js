// const hamMenu = document.querySelector(".menu-burgue");

// const offScreenMenu = document.querySelector(".off-screen-menu");

// hamMenu.addEventListener("click", () => {
//   hamMenu.classList.toggle("active");
//   offScreenMenu.classList.toggle("active");
// });

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
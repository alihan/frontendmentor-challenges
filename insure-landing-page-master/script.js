const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.classList.remove("open");
    menuOpen = false;
  }
  links.classList.toggle("show-links");
});

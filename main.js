let menuBar = document.querySelector(".menu-bar h3");
let menu = document.querySelector(".massive .container .header");
console.log(menuBar);
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("change-icon");
  menu.classList.toggle("active");
});

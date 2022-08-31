let body = document.querySelector("body");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  body.classList.toggle("active");
});

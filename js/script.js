const navIcon = document.querySelector(".navIcon");
const toggleBtn2 = document.querySelector(".toggleBtn2");
const navbar = document.querySelector(".navbar");

navIcon.addEventListener("click", () => {
  let navToggle = document.querySelector(".navToggle");
  navToggle.classList.add("translate0");
});
toggleBtn2.addEventListener("click", () => {
  let navToggle = document.querySelector(".navToggle");
  navToggle.classList.remove("translate0");
});

// window.addEventListener("scroll", () => {
//   if (this.window.scrollY >= 500) {
//     navbar.classList.add("active");
//   } else {
//     navbar.classList.remove("active");
//   }
// });

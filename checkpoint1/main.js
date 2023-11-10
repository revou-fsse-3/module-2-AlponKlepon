// DarkMode
let darkTheme = document.body;
let iconChange = document.getElementById("iconChange");
function darkMode() {
  darkTheme.classList.toggle("darkMode");
  darkTheme.classList.contains("darkMode")
    ? (iconChange.src = "assets/dark-mode/sun.png")
    : (iconChange.src = "assets/dark-mode/moon.png");
}
// Navbar Responsive
let sidebar = document.querySelector(".hamburger");
sidebar.onclick = function () {
  let navSidebar = document.querySelector("nav");
  let menuSidebar = document.querySelector(".navMenuWrapper");
  let buttonSidebar = document.querySelector(".navRightWrapper");
  navSidebar.classList.toggle("active");
  menuSidebar.classList.toggle("active");
  buttonSidebar.classList.toggle("active");
};

// Page Orbserver
const observer = new IntersectionObserver((area) => {
  area.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    } else {
      entry.target.classList.remove("animation");
    }
  });
});
const leftToRight = document.querySelectorAll(".hidden");
leftToRight.forEach((el) => observer.observe(el));

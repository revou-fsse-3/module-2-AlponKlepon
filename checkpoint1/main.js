let darkTheme = document.body;
let iconChange = document.getElementById("iconChange");
function darkMode() {
  darkTheme.classList.toggle("darkMode");
  darkTheme.classList.contains("darkMode")
    ? (iconChange.src = "assets/dark-mode/sun.png")
    : (iconChange.src = "assets/dark-mode/moon.png");
}

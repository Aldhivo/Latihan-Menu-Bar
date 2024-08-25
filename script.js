const menu_sideBar = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

menu_sideBar.addEventListener("click", function() {
    nav.classList.toggle("hidden")
});
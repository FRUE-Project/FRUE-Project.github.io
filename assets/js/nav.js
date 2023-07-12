const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarContent = document.getElementById("sidebarContent");

document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem("sidebar-open") === "true") {
        sidebarContent.classList.remove("sidebar-untoggled");
    } else if (localStorage.getItem("sidebar-open") === "false") {
        sidebarContent.classList.add("sidebar-untoggled");
    } else {
        localStorage.setItem("sidebar-open", "true");
        sidebarContent.classList.remove("sidebar-untoggled");
    }
});

sidebarToggle.addEventListener("click", function (event) {
    event.preventDefault();
    if (sidebarContent.classList.contains("sidebar-untoggled")) {
        localStorage.setItem("sidebar-open", "true");
        sidebarContent.classList.remove("sidebar-untoggled");
    } else {
        localStorage.setItem("sidebar-open", "false");
        sidebarContent.classList.add("sidebar-untoggled");
    }
});

const navToggle = document.getElementById("navbarToggle");
const navContent = document.getElementById("navbarContent");

navToggle.addEventListener("click", function (event) {
    event.preventDefault();
    if (navContent.classList.contains("navbar-collapsed")) {
        navContent.classList.remove("navbar-collapsed");
    } else {
        navContent.classList.add("navbar-collapsed");
    }
});

var dropdown = document.getElementById("dropdown-toggle");
var dropdownList = document.getElementById("dropdown-list");
dropdown.addEventListener("click", function (event) {
    event.preventDefault();
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
    }
});
window.addEventListener("click", function (event) {
    if (!event.target.matches("#dropdown-toggle")) {
        dropdownList.style.display = "none";
    }
});
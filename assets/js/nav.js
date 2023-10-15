const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarToggleIcon = document.getElementById("sidebarToggleIcon");
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

    if (sidebarToggleIcon.src === "https://frue-project.github.io/assets/imgs/sidebar-toggle.svg") {
        sidebarToggleIcon.src = "https://frue-project.github.io/assets/imgs/sidebar-untoggle.svg";
    } else {
        sidebarToggleIcon.src = "https://frue-project.github.io/assets/imgs/sidebar-toggle.svg";
    }
});

const navToggle = document.getElementById("navbarToggle");
const navToggleIcon = document.getElementById("navbarToggleIcon");
const navContent = document.getElementById("navbarContent");

navToggle.addEventListener("click", function (event) {
    event.preventDefault();
    if (navContent.classList.contains("navbar-collapsed")) {
        navContent.classList.remove("navbar-collapsed");
    } else {
        navContent.classList.add("navbar-collapsed");
    }

    if (navToggleIcon.src === "https://frue-project.github.io/assets/imgs/navbar-toggle.svg") {
        navToggleIcon.src = "https://frue-project.github.io/assets/imgs/navbar-untoggle.svg";
    } else {
        navToggleIcon.src = "https://frue-project.github.io/assets/imgs/navbar-toggle.svg";
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
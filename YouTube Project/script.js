let menuIcon = document.querySelector(".menu-icon");
let SideBar = document.querySelector(".side-bar");
let Container = document.querySelector(".container");
let subtn = document.querySelectorAll("#sub-btn");

menuIcon.onclick = function() {
    SideBar.classList.toggle("small-sidebar");
    Container.classList.toggle("large-contaner");
}
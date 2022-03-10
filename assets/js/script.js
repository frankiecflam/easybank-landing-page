const navbarToggler = document.querySelector(".navbar-toggler");
const screenOverlay = document.querySelector(".screen-overlay");
navbarToggler.onclick = () => {
    navbarToggler.classList.toggle("nav-open");
    screenOverlay.classList.toggle("active");
}

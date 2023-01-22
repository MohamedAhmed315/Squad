import '../css/styles.scss';
import PureCounter from "@srexi/purecounterjs";


// Dark Mode
let dark_mode = document.querySelector('#dark-mode-switch');
dark_mode.addEventListener('change', function () {
    if (dark_mode.checked == true) {
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
    }
    else {
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.add('light-mode');
    }
});

// WOW.JS
const WOW = require('wowjs');
if ($(window).width() >= 1025) {
    window.wow = new WOW.WOW({
        live: false
    });
    window.wow.init({
        offset: 50,
    });
}

// Sticky Navbar
window.onscroll = function () {
    if (window.pageYOffset > 700) {
        document.querySelector('nav').classList.add('nav-bg');
    }
    else {
        document.querySelector('nav').classList.remove('nav-bg');
    }
    scrollFunction();
}

// Close Navbar on Click
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("navbar-toggler-icon")) {
        document.querySelector("#header").classList.toggle("show");
    } else if (event.target.classList.contains("nav-link")) {
        document.querySelector("#header").classList.remove("show");
    }
});

// Back to Top
let back_to_top = document.querySelector('#back-to-top');
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        back_to_top.style.display = "block";
    } else {
        back_to_top.style.display = "none";
    }
}
back_to_top.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Counters
const pure = new PureCounter();
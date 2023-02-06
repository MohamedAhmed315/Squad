import '../css/styles.scss';
import Isotope from 'isotope-layout';

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
    if (event.target.classList.contains("navbar-toggler-icon") && document.querySelector("#header").classList.contains('show')) {
        document.querySelector("#header").classList.toggle("show");
    } else {
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

// Isotope Layout
var iso = new Isotope('.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener('click', function (event) {
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
});

var buttonGroups = document.querySelectorAll('.filter-button-group');
for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function (event) {
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        event.target.classList.add('is-checked');
    });
}
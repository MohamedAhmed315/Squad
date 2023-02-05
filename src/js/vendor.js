// Fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

// Counters
import PureCounter from "@srexi/purecounterjs";
const pure = new PureCounter();

// GLightBox
import GLightbox from 'glightbox';
const lightbox = GLightbox();

// Splide
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
new Splide('.splide', {
    type: 'loop',
    lazyLoad: 'sequential',
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    perPage: 3,
    perMove: 1,
    focus: 1,
    rewindSpeed: 1000,
    breakpoints: {
        1199: {
            perPage: 2,
        },
        991: {
            perPage: 1,
        },
    }
}).mount();

import 'jquery-validation';
$("#contact-form").validate();
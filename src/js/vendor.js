// Bootstrap
// import 'bootstrap';

// Fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

// Animate.css
// import 'animate.css';

// Wow.js
// import 'wowjs'

// Counters
import PureCounter from "@srexi/purecounterjs";
const pure = new PureCounter();

// GLightBox
import GLightbox from 'glightbox';
const lightbox = GLightbox();

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
}).mount();
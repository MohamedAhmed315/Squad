// Bootstrap
import "bootstrap";

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

// SweetAlert2
import Swal from 'sweetalert2'

// Jquery Validation
import 'jquery-validation';
$("#contact-form").validate({
    rules: {
        contact_name: {
            required: true
        },
        contact_email: {
            required: true,
            email: true
        },
        contact_message: {
            required: true
        }
    },
    messages: {
        contact_name: {
            required: 'Please enter your name.'
        },
        contact_email: {
            required: 'Please enter your email.',
            email: 'Invalid email format.'
        },
        contact_message: {
            required: 'Please enter your message.'
        },
    },
    submitHandler: function (form) {
        if ($("#contact-form").valid()) {
            Swal.fire({
                title: 'Done!',
                text: 'Your message has been sent successfully. \n We will contact you as soon as possible.',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    }
});
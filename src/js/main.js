import "../css/styles.scss";

// Dark mode
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
import "../css/styles.scss";

let dark_mode = document.querySelector('#dark-mode-switch');

dark_mode.addEventListener('change', function () {
    if (dark_mode.checked == true) {
        document.querySelector('body').classList.add('dark-mode');
    }

    else document.querySelector('body').classList.remove('dark-mode');

});

$("h1").on("click", function(){
    alert("clicked1");
});

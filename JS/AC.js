const AC_btn = document.querySelector('.AC');
const tabulka = document.querySelector('.Tabulka');

AC_btn.addEventListener('click', function () {
    AC_btn.classList.toggle('changed');
    tabulka.classList.toggle('changed');

});

/* Burgermenu */ 


const menu_btn = document.querySelector('.burgermenu');
const res_nav = document.querySelector('.Resp-navbar');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    res_nav.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!targetElement.closest('.burgermenu') && !targetElement.closest('.Resp-navbar')) {
        res_nav.classList.remove('hidden');
        menu_btn.classList.remove('is-active');
    }
});

/* Logo-scroll */


window.addEventListener('scroll', handleScrollBottom);
const navbar = document.querySelector('.content-navbar');

function handleScrollBottom() {

    if (window.scrollY >= 10) {
        navbar.classList.add('hide')
        navbar.classList.remove('show')
    } else {
        navbar.classList.remove('hide')
        navbar.classList.add('show')
    }
}

/* Aftercare menu */


const AC_btn = document.querySelector('.AC');
const tabulka = document.querySelector('.Tabulka');

AC_btn.addEventListener('click', function () {
    AC_btn.classList.toggle('changed');
    tabulka.classList.toggle('changed');

});

/* Aftercare menu resp */


const res_AC = document.querySelector('.Resp-AC');
const res_tabulka = document.querySelector('.Resp-tabulka');
const res_tabulka_hide = document.querySelector('.exit-arrow');

res_AC.addEventListener('click', function () {
    res_tabulka.classList.toggle('Roll')
});

res_tabulka_hide.addEventListener('click', function () {
    res_tabulka.classList.remove('Roll')
});


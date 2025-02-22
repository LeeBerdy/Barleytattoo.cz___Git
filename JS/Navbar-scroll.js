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

const res_AC = document.querySelector('.Resp-AC');
const res_tabulka = document.querySelector('.Resp-tabulka');
const res_tabulka_hide = document.querySelector('.exit-arrow');

res_AC.addEventListener('click', function () {
    res_tabulka.classList.toggle('Roll')
});

res_tabulka_hide.addEventListener('click', function () {
    res_tabulka.classList.remove('Roll')
});
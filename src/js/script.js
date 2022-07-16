//*burger кнопка + меню

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav');
const scrollLock = document.querySelector('.body-page');

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('nav--active');
    scrollLock.classList.toggle('scroll-lock');
});


//*search field поле поиска

const searchBtn = document.querySelector('.header__btn');
const searchField = document.querySelector('.search');


searchBtn.addEventListener('click', function () {
    searchField.classList.toggle('search--active');
    searchBtn.classList.toggle('header__btn--active');
});
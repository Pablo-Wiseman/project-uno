//*burger кнопка + меню

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav');
const scrollLock = document.querySelector('.body-page');

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('nav--active');
    scrollLock.classList.toggle('scroll-lock');
});
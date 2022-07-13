//*burger

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav');

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('nav--active');
});
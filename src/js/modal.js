//* modal frame

const btnClose = document.querySelector('.gallery-modal__btn');
const modalGallery = document.querySelector('.gallery-modal');
const body = document.body;

//? add click to each button
document.querySelectorAll('.gallery-swiper__slide').forEach((btnOpen) => { 
    btnOpen.addEventListener('click', function () {
    modalGallery.classList.add('gallery-modal--active');
    body.classList.add('scroll-lock');

    });
});

//? remove page scroll-lock class and hide modal window
btnClose.addEventListener('click',  () => {
    document.body.classList.remove('scroll-lock');
    modalGallery.classList.remove('gallery-modal--active');
    
});
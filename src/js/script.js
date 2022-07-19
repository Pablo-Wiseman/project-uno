//*burger кнопка + меню

const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav");
const scrollLock = document.querySelector(".body-page");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("burger--active");
  burgerMenu.classList.toggle("nav--active");
  scrollLock.classList.toggle("scroll-lock");
});

//*search field поле поиска

const searchBtn = document.querySelector(".header__btn");
const searchField = document.querySelector(".search");

searchBtn.addEventListener("click", function () {
  searchField.classList.toggle("search--active");
  searchBtn.classList.toggle("header__btn--active");
});

//*tabs переключение жанров

document.querySelectorAll(".subheader__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll(".subheader__btn").forEach(function (btn) {
      btn.classList.remove("subheader__btn--active");
      event.currentTarget.classList.add("subheader__btn--active");
    });

    document.querySelectorAll(".subheader__content").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("subheader__content--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("subheader__content--active");
  });
});

//!swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2500,

  autoplay: {
    delay: 10000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
});

//!swiper gallery
const swiperGallery = new Swiper('.gallery__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2500,

  autoplay: {
    delay: 10000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});


//*choices селект

const element = document.querySelector(".filter__select");
const choices = new Choices(element, {
  placeholder: true,
  shouldSort: true,
  searchEnabled: false,
  itemSelectText: '',

});

document.addEventListener('DOMContentLoaded', () => {
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


  // //*tabs переключение жанров

  document.querySelectorAll('.subheader__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.subheader__btn').forEach(function (btn) {
        btn.classList.remove('subheader__btn--active');
        event.currentTarget.classList.add('subheader__btn--active');
        if (event.currentTarget.classList.contains('subheader__btn--active')) {
          btn.classList.remove('subheader__btn--active');
        } else { 
          event.currentTarget.classList.add('subheader__btn--active');
        }
      });

      
        document.querySelectorAll('.subheader__content').forEach(function (tabsBtn) {
          tabsBtn.classList.remove('subheader__content--active');
        });
        
      
        document.querySelector(`[data-target="${path}"]`).classList.toggle('subheader__content--active');
    });
        
  });
  
  

  

  //!hero swiper
  const swiper1 = new Swiper('.hero-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2500,

    autoplay: {
      delay: 10000,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  //*gallery swiper

  const swiper2 = new Swiper('.gallery-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1500: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  //*choices селект

  const element = document.querySelector('.filter__select');
  const choices = new Choices(element, {
    placeholder: true,
    shouldSort: true,
    searchEnabled: false,
    itemSelectText: '',
  });

  //*catalog tabs
  document
    .querySelectorAll('.accordion__content-link')
    .forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        document
          .querySelectorAll('.accordion__content-link')
          .forEach(function (btn) {
            btn.classList.remove('accordion--active');
          });
        e.currentTarget.classList.add('accordion--active');
        document.querySelectorAll('.tab__wrapper').forEach(function (tabsBtn) {
          tabsBtn.classList.remove('tab--active');
        });

        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add('tab--active');
      });
    });

  //* card swiper
  const swiper3 = new Swiper('.event-slider', {
    direction: 'horizontal',
    spaceBetween: 100,
    slidesPerView: 1,
    spaceBetween: 10,
    clickable: true,

    pagination: {
      el: '.event-slider__pagination',
      clickable: true,
      type: 'bullets',
    },

    navigation: {
      nextEl: '.event-slider__next',
      prevEl: '.event-slider__prev',
    },
    // using "ratio" endpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      1020: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 2,
      },
    },
  });

  //* project swiper
  const swiper4 = new Swiper('.partner', {
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 1,
    spaceBetween: 10,
    clickable: true,

    navigation: {
      nextEl: '.partner__next',
      prevEl: '.partner__prev',
    },
    // using "ratio" endpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },

      1020: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      1170: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });

  //*tooltips

  tippy('.project__tooltip', {
    arrow: true,
    duration: 500,
    animation: 'scale',
    maxWidth: 280,
    theme: 'tooltip',
    trigger: 'click',
  });

  //*map
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map('blanchard', {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75846806898367, 37.60108849999989],
      
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "icon/pointer.png",
        iconImageSize: [50, 50],
        iconImageOffset: [-3, -42],
      }
    );
  
    myMap.geoObjects.add(myPlacemark);
  }
  
});

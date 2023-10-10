// const burger = document.querySelector('.burger')
// const menu = document.querySelector('.mobile-menu')
// const body = document.body

// burger.addEventListener('click', () => {
//   burger.classList.toggle('active')
//   menu.classList.toggle('active')
//   body.classList.toggle('lock')
// })

// tabs

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach((item) => {
      item.classList.remove("tab-active");
    });

    tabsItems.forEach((item) => {
      item.classList.remove("tab-active");
    });

    currentBtn.classList.add("tab-active");
    currentTab.classList.add("tab-active");
  });
});

// swiper

// Свайпер для блока скидок

const discountThumbsContent = document.querySelector(
  ".discount__swiper-thumbs"
);
const discountThumbs = new Swiper(discountThumbsContent, {
  spaceBetween: 30,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
    // брейкпоинты миниатюр
  breakpoints: {
    1280: {
      slidesPerView: 5,
    },
    640: {
      slidesPerView: 4,
      
    }
  }
});

const discountSwiperContent = document.querySelector(".discount__swiper");

const discountSwiper = new Swiper(discountSwiperContent, {
  slidesPerView: "auto",
  spaceBetween: 50,
  grabCursor: true,

  navigation: {
    nextEl: ".discount__slider-btn--next",
    prevEl: ".discount__slider-btn--prev",
    clickable: true,
  },

  pagination: {
    el: ".site__swiper-pagination",
    type: "bullets",
    clickable: true,
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  },
  thumbs: {
    swiper: discountThumbs,
  },
});


// Слайдер новостей
const newsSwiperContent = document.querySelector(".news__swiper");

const newsSwiper = new Swiper(newsSwiperContent, {
  slidesPerView: 2.2,
  spaceBetween: 30,
  grabCursor: true,
  slideToClickedSlide: true,
  initialSlide : 1,
  centeredSlides: true,
  loop: true,
 
  breakpoints: {
    1280: {
      slidesPerView: 2.2,
    },
    640: {
      slidesPerView: 2,
    }
  },
 

  pagination: {
    el: ".site__swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
// Проверка на наличие в блоке элемента с тегом img
// Если тег есть - у контента убирается заглушка
// Если тега нет - заглушка остается из стилей

// window.addEventListener("load", () => {
//   const cards = document.querySelectorAll(".popular__list-item");

//   cards.forEach((item) => {
//     if (item.querySelector(".popular__list-item-content-img")) {
//       item.style.backgroundImage = "none";
//     } else {
//       item.style.backgroundImage = " ";
//     }
//   });
// });


// Фиксированная шапка

let header = document.querySelector(".header");
let content = document.querySelector(".hero");



let observer = new IntersectionObserver(
  function(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.remove("fixed");
      } else {
        header.classList.add("fixed");
      }
    });
  }, {
    threshold: 0.4
  })

  observer.observe(content);


 

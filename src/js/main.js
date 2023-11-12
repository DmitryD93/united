const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const body = document.body
const link = document.querySelectorAll('.link')
const headerbBtn = document.querySelectorAll('.header__btn')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
  body.classList.toggle('lock')

  link.forEach(e => {
    e.addEventListener('click', () => {
      burger.classList.remove('active')
      menu.classList.remove('active')
      body.classList.remove('lock')
    })
  })
  headerbBtn.forEach(e => {
    e.addEventListener('click', () => {
      burger.classList.remove('active')
      menu.classList.remove('active')
      body.classList.remove('lock')
    })
  })
})

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
  // slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  // брейкпоинты миниатюр
  breakpoints: {
    1280: {
      slidesPerView: 5,
    },
    900: {
      slidesPerView: 4,
    },
    550: {
      slidesPerView: 5,
    },
    420: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    }
  },
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
  // slidesPerView: 2.2,
  // spaceBetween: 30,
  grabCursor: true,
  slideToClickedSlide: true,
  initialSlide: 1,

  breakpoints: {
   280 : {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      loop: false,
    },

    551: {
      slidesPerView: 1.6,
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
    },

    1280: {
      slidesPerView: 2.2,
      loop : true,
      centeredSlides: true,
      spaceBetween: 20
    },
    
  },

  pagination: {
    el: ".site__swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  
  navigation: {
    nextEl: ".news__slider-btn--next",
    prevEl: ".news__slider-btn--prev",
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
// Обсервер для появления кнопки и плашки поиска

// let header = document.querySelector(".header");
let content = document.querySelector(".hero");

let observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // header.classList.remove("fixed");
        searchBtn.classList.remove("fixed");
        search();
      } else {
        // header.classList.add("fixed");
        searchBtn.classList.add("fixed");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

observer.observe(content);

let searchBtn = document.querySelector(".header__search-btn");
let headerSearch = document.querySelector(".header__search");

function search() {
  if (!searchBtn.fixed) {
    headerSearch.classList.remove("fixed");
  };
}

searchBtn.addEventListener("click", () => {
  if(headerSearch.classList.contains("fixed")) {
    headerSearch.classList.remove("fixed");
  } else {
    headerSearch.classList.add("fixed");
  }
});

// Убрать поиск шапки при клике на пустую область

document.addEventListener("click", (e) => {
    let elem = e.target;

    if(!elem.classList.contains("header__search") && !elem.closest(".fixed")) {
      headerSearch.classList.remove("fixed"); 
    }

    //  Убрать блок входа на низком разрешении при клике на пустую область

    if(!elem.classList.contains("header__login-block") && !elem.closest(".header__join-visible-btn")) {
      loginBlock.classList.remove("active"); 
    }
})

// кнопка сброса формы поиска

const searchInput = document.querySelector(".header__search-form-input");
const clearBtn = document.querySelector(".header__search-clear-btn");

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
})

// логика кнопки входа для открытия блока на низком разрешении

const joinDoorBtn = document.querySelector(".header__join-visible-btn");
const loginBlock = document.querySelector(".header__login-block");

joinDoorBtn.addEventListener("click", () => {
  loginBlock.classList.toggle("active");
  headerSearch.classList.remove("fixed");
})



// Тест сделать подгрузку изображения в фон и в контент
// const newsImage = document.querySelector(".news-hero__picture img");
// const background = document.querySelector(".news-hero__background");

// if (newsImage && background !== undefined) {
// newsImage.addEventListener("load", () => {
//   background.style.backgroundImage = `url(${newsImage.src})`;
// })
// }

// Открытие интерактивной корзины в правой границе сайта

const basketBtn = document.querySelector(".product-basket__btn");
const productBasket = document.querySelector(".product-basket");
const productBasketContent = document.querySelector(".product-basket__content");

const productBasketBtnText = document.querySelector(".product-basket__btn-text span");

console.log(productBasketBtnText);

basketBtn.addEventListener("click", () => {
  productBasket.classList.toggle("active");
  basketBtn.classList.toggle("active");
  productBasketContent.classList.toggle("active");

})

// видимость корзины при наличии товара




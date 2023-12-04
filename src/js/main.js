const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const body = document.body;
const link = document.querySelectorAll(".link");
const headerbBtn = document.querySelectorAll(".header__btn");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");

  link.forEach((e) => {
    e.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
    });
  });
  headerbBtn.forEach((e) => {
    e.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
    });
  });
});

// tabs

const tabsBtn = document?.querySelectorAll(".tabs__nav-btn");
const tabsItems = document?.querySelectorAll(".tabs__item");

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
    },
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
  grabCursor: true,
  slideToClickedSlide: true,
  initialSlide: 1,

  breakpoints: {
    280: {
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
      loop: true,
      centeredSlides: true,
      spaceBetween: 20,
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
  }
}

searchBtn.addEventListener("click", () => {
  if (headerSearch.classList.contains("fixed")) {
    headerSearch.classList.remove("fixed");
  } else {
    headerSearch.classList.add("fixed");
  }
});

// Убрать поиск шапки при клике на пустую область

document.addEventListener("click", (e) => {
  let elem = e.target;

  if (!elem.classList.contains("header__search") && !elem.closest(".fixed")) {
    headerSearch.classList.remove("fixed");
  }

  //  Убрать блок входа на низком разрешении при клике на пустую область

  if (
    !elem.classList.contains("header__login-block") &&
    !elem.closest(".header__join-visible-btn")
  ) {
    loginBlock.classList.remove("active");
  }
});

// кнопка сброса формы поиска

const searchInput = document?.querySelector(".header__search-form-input");
const clearBtn = document?.querySelector(".header__search-clear-btn");

clearBtn?.addEventListener("click", () => {
  searchInput.value = "";
});

// логика кнопки входа для открытия блока на низком разрешении

const joinDoorBtn = document?.querySelector(".header__join-visible-btn");
const loginBlock = document?.querySelector(".header__login-block");

joinDoorBtn.addEventListener("click", () => {
  loginBlock.classList.toggle("active");
  headerSearch.classList.remove("fixed");
});

// Тест сделать подгрузку изображения в фон и в контент
// const newsImage = document.querySelector(".news-hero__picture img");
// const background = document.querySelector(".news-hero__background");

// if (newsImage && background !== undefined) {
// newsImage.addEventListener("load", () => {
//   background.style.backgroundImage = `url(${newsImage.src})`;
// })
// }

// Открытие интерактивной корзины в правой границе сайта

const basketBtn = document?.querySelector(".product-basket__btn");
const productBasket = document?.querySelector(".product-basket");
const productBasketContent = document?.querySelector(
  ".product-basket__content"
);
const headerBasketBtn = document?.querySelector(".header__basket-btn");

const productBasketBtnText = document?.querySelector(
  ".product-basket__btn-text span"
);

console.log(productBasketBtnText);

if (window.innerWidth > 550) {
  basketBtn?.addEventListener("click", () => {
    productBasket?.classList.toggle("active");
    basketBtn?.classList.toggle("active");
    productBasketContent?.classList.toggle("active");
  });
} else {
  headerBasketBtn?.addEventListener("click", () => {
    productBasket?.classList.add("active");
    basketBtn?.classList.add("active");
    productBasketContent?.classList.add("active");
  });

  basketBtn?.addEventListener("click", () => {
    productBasket?.classList.remove("active");
    basketBtn?.classList.remove("active");
    productBasketContent?.classList.remove("active");
  });
}

// Модальное окно (секция страницы "Запчасти")

const modalBtn = document?.querySelectorAll(".modal__btn");
const modalWindow = document?.querySelector(".modal-container");
const modalContent = document?.querySelectorAll(".modal-content");
const modalTitle = document?.querySelector(".details-filter__top-modal-title");

modalBtn?.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow?.classList.toggle("active");
    modalBtn?.forEach((item) => {
      item.classList.toggle("active");
    });
    modalContent?.forEach((item) => {
      item.classList.toggle("active");
    });
    modalTitle?.classList.toggle("active");
  });
});

window.addEventListener("click", (event) => {
  let isClickInsideModal = false;

  modalContent?.forEach((item) => {
    if (item.contains(event.target)) {
      isClickInsideModal = true;
    }
  });

  if (isClickInsideModal) {
    return;
  } else {
    modalBtn?.forEach((item) => {
      item.classList.remove("active");
    });
    modalWindow?.classList.remove("active");
    modalContent?.forEach((item) => {
      item.classList.remove("active");
    });
    modalTitle?.classList.remove("active");
  }
});

// Показ чекбоксов марки авто для мобильной версии

const showElBtn = document?.querySelector(
  ".details-filter__top-mobile-open-list-btn"
);
const productsLength = document?.querySelectorAll(
  ".details-filter__top-label"
).length;
let items = 2;

const handleClick = () => {
  const arr = Array.from(
    document.querySelector(".details-filter__top-form").children
  );

  items += 4;
  const visItems = arr.slice(0, items);
  visItems.forEach((item) => {
    if (!item.classList.contains("visible")) {
      item.classList.add("visible");
    }
  });

  if (visItems.length === productsLength) {
    showElBtn.style.rotate = "180deg";
    showElBtn.removeEventListener("click", handleClick);
    items = 2;

    showElBtn?.addEventListener("click", () => {
      arr.forEach((item, index) => {
        if (index >= items) {
          item.classList.remove("visible");
        }
      });

      showElBtn.style.rotate = "0deg";
      showElBtn.addEventListener("click", handleClick);
    });
  } else {
    showElBtn.style.rotate = "0deg";
  }
};

showElBtn?.addEventListener("click", handleClick);

// Пока чекбоксов категории

const showElBtnCategories = document?.querySelector(
  ".details-filter__bottom-btn"
);
const productsLengthCategories = document?.querySelectorAll(
  ".details-filter__bottom-label"
).length;
let itemsCategories = 5;

const handleClickCategories = () => {
  const arrCategories = Array.from(
    document.querySelector(".details-filter__bottom-form").children
  );

  itemsCategories += 4;
  const visItems = arrCategories.slice(0, itemsCategories);
  visItems.forEach((item) => {
    if (!item.classList.contains("visible")) {
      item.classList.add("visible");
    }
  });

  if (visItems.length === productsLengthCategories) {
    showElBtnCategories.style.rotate = "180deg";
    showElBtnCategories.removeEventListener("click", handleClickCategories);
    itemsCategories = 5;

    showElBtnCategories.addEventListener("click", () => {
      arrCategories.forEach((item, index) => {
        if (index >= itemsCategories) {
          item.classList.remove("visible");
        }
      });

      showElBtnCategories.style.rotate = "0deg";
      showElBtnCategories.addEventListener("click", handleClickCategories);
    });
  } else {
    showElBtnCategories.style.rotate = "0deg";
  }
};

showElBtnCategories?.addEventListener("click", handleClickCategories);

// Полет товара в корзину

window.onload = function () {
  document.addEventListener("click", flyProductToBasket);

  function flyProductToBasket(e) {
    const targetElement = e.target;

    if (targetElement.classList.contains("product-list__basket-btn")) {
      const productId = targetElement.closest(".product-list__list-item")
        .dataset.pid;
      addToBasket(targetElement, productId);
      e.preventDefault();
    }
  }

  function addToBasket(productButton, productId) {
    if (!productButton.classList.contains("_hold")) {
      productButton.classList.add("_hold");
      productButton.classList.add("_flyItem");

      const cart = document?.querySelector(".product-basket");
      const mobileCart = document?.querySelector(".header__basket-btn");
      const product = document?.querySelector(`[data-pid="${productId}"]`);
      const productItem = product?.querySelector(
        ".product-list__adaptive-name-list-item a div"
      );

      const productItemClone = productItem?.cloneNode(true);

      const productItemCloneWidth = productItem?.offsetWidth;
      const productItemCloneHeight = productItem?.offsetHeight;
      const productItemCloneTop = productItem?.getBoundingClientRect().top;
      const productItemCloneLeft = productItem?.getBoundingClientRect().left;

      productItemClone.setAttribute("class", "_flyItem _ibg");
      productItemClone.style.cssText = `
    left: ${productItemCloneLeft}px;
    top: ${productItemCloneTop}px;
    width: ${productItemCloneWidth}px;
    height: ${productItemCloneHeight}px;
    scale: 2.5;
    `;

      document.body.append(productItemClone);

      let cartFlyLeft = cart?.getBoundingClientRect().left;
      let cartFlyTop = cart?.getBoundingClientRect().top;

      let mobileCartFlyLeft = mobileCart?.getBoundingClientRect().left;
      let mobileCartFlyTop = mobileCart?.getBoundingClientRect().top;

      if (window.innerWidth <= 550) {
        productItemClone.style.cssText = `
    left: ${mobileCartFlyLeft}px;
    top: ${mobileCartFlyTop}px;
    width: 50px;
    height: 50px;
    scale: 0;
    rotate: 180deg;
    opacity: 0;
    `;
      } else {
        productItemClone.style.cssText = `
    left: ${cartFlyLeft}px;
    top: ${cartFlyTop}px;
    width: 50px;
    height: 50px;
    scale: 0;
    rotate: 180deg;
    opacity: 0;
    `;
      }

      setTimeout(() => {
        productItemClone?.remove();
      }, 2500);
    }
  }
};

// Слайдер для подробных запчастей

const targetDetailsThumbsContent = document.querySelector(
  ".target-details-product__swiper-thumbs"
);
const targetDetailsThumbs = new Swiper(targetDetailsThumbsContent, {
  spaceBetween: 30,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  watchOverflow: true,

  // брейкпоинты миниатюр
  breakpoints: {
    1280: {
      slidesPerView: 5,
    },
    900: {
      slidesPerView: 4,
    },
    // 550: {
    //   slidesPerView: 5,
    // },
    420: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    },
  },
});

const targetDetailsSwiperContent = document.querySelector(
  ".target-details-product__swiper"
);

const targetDetailsSwiper = new Swiper(targetDetailsSwiperContent, {
  slidesPerView: "auto",
  spaceBetween: 50,
  grabCursor: true,
  watchOverflow: true,

  // navigation: {
  //   nextEl: ".target-details-product__slider-btn--next",
  //   prevEl: ".target-details-product__slider-btn--prev",
  //   clickable: true,
  // },

  pagination: {
    el: ".site__swiper-pagination",
    type: "bullets",
    clickable: true,
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  },
  thumbs: {
    swiper: targetDetailsThumbs,
  },
});

// Слайдер галереи сервиса

const galerySwiperContent = document.querySelector(".galery__swiper");

const galerySwiper = new Swiper(galerySwiperContent, {
  grabCursor: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoheight: false,
      centeredSlides: true,
      initialSlide: 1,
    },

    550: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
    },

    750: {
      slidesPerView: 2.1,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
    },
    1000: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
    },
  },

  pagination: {
    el: ".site__swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,

    551: {
      // dynamicMainBullets: 5,
    },

    300: {
      // dynamicMainBullets: 2,
    },
  },

  navigation: {
    nextEl: ".galery__slider-btn--next",
    prevEl: ".galery__slider-btn--prev",
    clickable: true,
  },
});

// Яндекс карта [59.812049, 30.397624]
function init(ymaps) {
  let map = new ymaps.Map("map", {
    center: [59.815292, 30.398208],
    zoom: 16,
    controls: ["routePanelControl"],
  });

  let control = map.controls.get("routePanelControl");
  let city = "Санкт-Петербург";
  // let startPoint = [59.800978, 30.398845]
  control.routePanel.state.set({
    type: "masstransit",
    fromEnabled: true,
    toEnabled: false,
    to: [59.815017, 30.397554],
    from: [59.800978, 30.398845],
  });

  let placemark = new ymaps.Placemark(
    [59.815292, 30.398208],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/placemark_one.png",
      iconImageSize: [56, 73],
      iconImageOffset: [-20, -50],
    }
  );
  let placemark1 = new ymaps.Placemark(
    [59.800978, 30.398845],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/placemark_two.png",
      iconImageSize: [56, 73],
      iconImageOffset: [-20, -50],
    }
  );
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark); // передаем переменную placemark
  map.geoObjects.add(placemark1); // передаем переменную placemark
}

const mapBlock = document?.getElementById("map");

if (mapBlock) {
  ymaps.ready(init); // вызов функции карты
}

// Табы для регистрации
const regTabsBtn = document?.querySelectorAll(".registration-main__nav-btn");
const regTabsItems = document?.querySelector(
  ".registration-main__form-company"
);

regTabsBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    regTabsBtn.forEach((item) => {
      item.classList.remove("active");
    });

    if (tabId === "entity") {
      regTabsItems.classList.add("active");
    } else {
      regTabsItems.classList.remove("active");
    }

    currentBtn.classList.add("active");
    currentTab.classList.add("active");
  });
});

// Селект формы

const formSelectRegion = document.querySelectorAll(
  ".registration-main__form-select"
);

formSelectRegion.forEach((item) => {
  new Choices(item, {
    searchEnabled: false,
    itemSelectText: " ",
  });
});

// Показ пароля

const showPassword = document?.querySelector(
  ".registration-main__form-password-visible"
);
const passwordInput = document?.getElementById("password");

showPassword?.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPassword.classList.add("visible");
  } else {
    passwordInput.type = "password";
    showPassword.classList.remove("visible");
  }
});

// Галерея сервиса
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

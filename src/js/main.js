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
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const discountSwiperContent = document.querySelector(".discount__swiper");

const discountSwiper = new Swiper(discountSwiperContent, {
  slidesPerView: "auto",
  spaceBetween: 40,
  grabCursor: true,

  navigation: {
    nextEl: ".discount__slider-btn--next",
    prevEl: ".discount__slider-btn--prev",
    clickable: true,
  },

  pagination: {
    el: ".discount__swiper-pagination",
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


// Яндекс карта [59.812049, 30.397624]
function init(ymaps) {
    let map = new ymaps.Map('map', {
      center: [59.815292, 30.398208],
      zoom: 16,
      controls: ['routePanelControl']
    });

    let control = map.controls.get('routePanelControl');
    let city = 'Санкт-Петербург'
    // let startPoint = [59.800978, 30.398845]
    control.routePanel.state.set({
        type: 'masstransit',
        fromEnabled: true,
        toEnabled: false,
        to: [59.815017, 30.397554],
        from: [59.800978, 30.398845],
    })
  
    let placemark = new ymaps.Placemark([59.815292, 30.398208], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/placemark_one.png',
      iconImageSize: [56, 73],
      iconImageOffset: [-20, -50]
    });
    let placemark1 = new ymaps.Placemark([59.800978, 30.398845], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark_two.png',
      iconImageSize: [56, 73],
      iconImageOffset: [-20, -50]
    });
      map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(placemark) // передаем переменную placemark
    map.geoObjects.add(placemark1) // передаем переменную placemark
  
  }
  
  ymaps.ready(init); // вызов функции карты
  
  
  



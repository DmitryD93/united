// const burger = document.querySelector('.burger')
// const menu = document.querySelector('.mobile-menu')
// const body = document.body

// burger.addEventListener('click', () => {
//   burger.classList.toggle('active')
//   menu.classList.toggle('active')
//   body.classList.toggle('lock')
// })


  
 

// tabs

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach((item) => {
            item.classList.remove('tab-active');
        })

        tabsItems.forEach((item) => {
            item.classList.remove('tab-active');
        })

        currentBtn.classList.add('tab-active');
        currentTab.classList.add('tab-active');

    })
})
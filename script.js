import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.baner__swiper.swiper',{
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
})
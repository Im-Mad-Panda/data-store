const tetSlider = new Swiper('.test-slider',{
    slidesPerView: 3,
    navigation: {
        nextEl: '.arrow-left',
        prevEl: '.arrow-right',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    
      
})
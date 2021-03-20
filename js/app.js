const tetSlider = new Swiper('.test-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.arrow-left',
    prevEl: '.arrow-right',
  },
  pagination: {
    el: '.slider-pagination',
    bulletClass: 'slider-bullet',
    bulletActiveClass: 'slider-active-bullet'
  },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
})
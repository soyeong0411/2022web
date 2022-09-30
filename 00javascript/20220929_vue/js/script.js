var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay: {
      delay: 3000,
    }, 
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
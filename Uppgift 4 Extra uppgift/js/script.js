var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    }
  });
  
var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
    nextEl: ".main-banners__swiper__button-next",
    prevEl: ".main-banners__swiper__button-prev",
    preventClicks: false,
    },
});





var swiper = new Swiper(".mySwiper-banners", {
    slidesPerView: 2,
    spaceBetween: 8,
 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     breakpoints: {
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        1400: {
          slidesPerView: 4,
        }
     },
  });



  var swiper = new Swiper(".mySwiper-more-search", {
    slidesPerView: 1,
    spaceBetween: 8,
 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     breakpoints: {
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          spaceBetween: 20,

        }
     },
  });
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
    navigation: {
      nextEl: ".search-more__slider__box__button-next",
      prevEl: ".search-more__slider__box__button-prev",
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





  var swiper = new Swiper(".search-more__slider__box__title-box__component__swiper", {
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
          spaceBetween: 8,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 6,
          spaceBetween: 8,

        }
     },
  });



  var swiper = new Swiper(".mySwiper-vip-slider", {
    slidesPerView: 2.3,
    spaceBetween: 16,
 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     breakpoints: {
        // when window width is >= 480px
        576: {
          slidesPerView: 4,
          spaceBetween: 27,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 27,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 27,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 8,
          spaceBetween: 27,

        }
     },
  });







  var swiper = new Swiper(".category__slider__swiper", {
    slidesPerView: 2,
    spaceBetween: 16,
 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     breakpoints: {
        // when window width is >= 480px
        576: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 27,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 27,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 6,
          spaceBetween: 28,

        }
     },
  });




  var swiper = new Swiper(".recomended__slider__swiper", {
    slidesPerView: 2.3,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".recomended__slider__box__button-next",
      prevEl: ".recomended__slider__box__button-prev",
    },
     breakpoints: {
        // when window width is >= 480px
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 5.5,
          spaceBetween: 20,

        }
     },
  });


  var swiper = new Swiper(".oriented-prod__slider__box__title-box__component__swiper", {
    slidesPerView: 2.3,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

     breakpoints: {
        // when window width is >= 480px
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 5.5,
          spaceBetween: 20,

        }
     },
  });




  var swiper = new Swiper(".recomended__slider__box__title-box__component__swiper", {
    slidesPerView: 2,
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
        // when window width is >= 480px
        576: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 6,
          spaceBetween: 8,

        }
     },
  });







  // var swiper = new Swiper(".oriented-prod__content__box-slider__swiper", {
  //   slidesPerView: 2,
  //   spaceBetween: 8,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //    breakpoints: {
  //       // when window width is >= 480px
  //       576: {
  //         slidesPerView: 3,
  //         spaceBetween: 8,
  //       },
  //       768: {
  //         slidesPerView: 3,
  //         spaceBetween: 8,
  //       },
  //       // when window width is >= 640px
  //       1200: {
  //         slidesPerView: 1,
  //         spaceBetween: 8,

  //       }
  //    },
  // });


  var swiper = new Swiper(".oriented-prod__grid-slider__swiper", {
    slidesPerView: 1,
    grid: {
      rows: 4,
    },
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
        grid: {
          rows: 2,
        },
        
      },
      992: {
        slidesPerView: 1,
        grid: {
          rows: 4,
        },
        
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 28,
        grid: {
          rows: 2,

        },
        
      }
   },
            
  });
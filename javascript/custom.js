var swiper = new Swiper(".main-banners__swiper", {
    loop: true,
    // observer: true,
    // observeParents: true,
    // parallax:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-banners__swiper__button-next",
      prevEl: ".main-banners__swiper__button-prev",
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
      // 768: {
      //   slidesPerView: 2,
      //   spaceBetween: 28,
      //   grid: {
      //     rows: 2,
      //   },
        
      // },
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

  var swiper = new Swiper(".merchants__slider__swiper", {
    slidesPerView: 3,
    spaceBetween: 16,
 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".merchants__title__box__button-next",
      prevEl: ".merchants__title__box__button-prev",
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
          slidesPerView: 8,
          spaceBetween: 20,

        }
     },
  });  

  var swiper = new Swiper(".sales__box__slider__swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".merchants__title__box__button-next",
      prevEl: ".merchants__title__box__button-prev",
    },
     breakpoints: {
        // when window width is >= 480px
        576: {
          slidesPerView: 1,
          spaceBetween: 27,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 27,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 27,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,

        }
     },
  });

  var swiper = new Swiper(".service__slider__swiper", {
    slidesPerView: 1,
    grid: {
      rows: 2,
    },
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".service__title__button-next",
      prevEl: ".service__title__button-prev",
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
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
        
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 2,

        },
        
      }
   },
            
  });


     //Get the button
     var mybutton = document.getElementById("myBtn");
        
     // When the user scrolls down 20px from the top of the document, show the button
     window.onscroll = function() {scrollFunction()};
     
     function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "flex";
       } else {
         mybutton.style.display = "none";
       }
     }
     
     // When the user clicks on the button, scroll to the top of the document
     function topFunction() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
     }
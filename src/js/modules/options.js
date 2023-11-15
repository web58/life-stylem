export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    bodyMask: ' (___) ___ __ __',
  },
  ValidationErrors: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  RequestOptions: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
    MethodGet: 'GET',
    MethodPost: 'POST',
  },
  Swiper: {
    MainHero: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: '.main-hero [data-to-slide="prev"]',
        nextEl: '.main-hero [data-to-slide="next"]',
      },
      pagination: {
        el: '.main-hero__pagination',
        clickable: false,
      }
    },
    AboutFirst: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        prevEl: '.about-first__controls [data-to-slide="prev"]',
        nextEl: '.about-first__controls [data-to-slide="next"]',
      },
      pagination: {
        el: '.about-first__pagination',
        clickable: false,
      }
    },
    AboutTestimonials: {
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
      navigation: {
        prevEl: '.about-testimonials__controls [data-to-slide="prev"]',
        nextEl: '.about-testimonials__controls [data-to-slide="next"]',
      },
      pagination: {
        el: '.about-testimonials__slider .slider__pagination',
        clickable: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    },
    PostGallery: {
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
      navigation: {
        prevEl: '.product-gallery__controls [data-to-slide="prev"]',
        nextEl: '.product-gallery__controls [data-to-slide="next"]',
      },
      pagination: {
        el: '.product-gallery__pagination',
        clickable: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    },
  },
};

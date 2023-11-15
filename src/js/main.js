import {
  Options,
} from './modules/options.js';

import {
  iosVhFix,
  initSlider
} from './modules/utils.js';

import {
  initModal
} from './modules/modal.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initHeaderSettings
} from './modules/header.js';

import {
  initYTubeVideo
} from './modules/yt-video.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    initModal();
    initScrollTop();
    validateForms();
    initHeaderSettings();
    initYTubeVideo();
    initSlider( '.main-hero', Options.Swiper.MainHero );
    initSlider( '.about-first__slider', Options.Swiper.AboutFirst );
    initSlider( '.about-testimonials__slider', Options.Swiper.AboutTestimonials );
    initSlider( '.product-gallery__slider', Options.Swiper.PostGallery );
  } );
} );

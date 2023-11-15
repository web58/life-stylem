import {
  isEscKey,
} from './utils.js';

const headerNode = document.querySelector( '.header-main' );
const headerModalNode = document.querySelector( '.header-modal' );
const MENU_ID = 'mobile-menu';
const BURGER_OPTIONS = {
  animationSpeed: 300,
  menuId: MENU_ID,
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
};
const siteBurger = new JustBurger( BURGER_OPTIONS );

function openMobileMenu() {
  document.documentElement.classList.add( 'is-open-modal' );
  headerNode.classList.add( 'header-main--is-open-menu' );
  headerModalNode.setAttribute( 'aria-hidden', 'false' );
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-open-modal' );
  headerNode.classList.remove( 'header-main--is-open-menu' );
  headerModalNode.setAttribute( 'aria-hidden', 'true' );
}

const initMobileDropdownMenu = ( selector ) => {
  if ( !selector ) return;
  const dropdownMenuNodes = document.querySelectorAll( selector );

  const onDropdownLinkClick = ( evt ) => {
    if ( window.matchMedia( '(min-width: 1200px)' ).matches ) return;
    evt.preventDefault();
    if ( evt.target && evt.target.nodeName === 'A' ) {
      evt.target.parentNode.classList.toggle( 'is-expanded' );
    }
  };

  const createMenu = ( dropdownMenu ) => {
    dropdownMenu.querySelectorAll( 'a' ).forEach( ( link ) => {
      if ( link.nextElementSibling && link.nextElementSibling.nodeName === 'UL' ) {
        link.parentNode.classList.add( 'has-child' );
        link.addEventListener( 'click', onDropdownLinkClick );
      }
    } );
  };

  dropdownMenuNodes.forEach( createMenu );
};

const initHeaderMenu = () => {
  if ( !headerModalNode || !headerNode ) return;
  headerModalNode.id = MENU_ID;
  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) && headerModalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      siteBurger.close();
    }
  } );
};

const observeSiteHeader = () => {
  const headerTopNode = document.querySelector( '.header-top' );
  const headerMainNode = document.querySelector( '.header-main' );
  const targetTopNode = document.querySelector( '#site-top' );
  let offsetHeight;

  if ( !targetTopNode ) return;

  if ( !headerMainNode || !headerTopNode ) {
    offsetHeight = 150;
  } else {
    offsetHeight = parseInt( headerTopNode.clientHeight, 10 ) + parseInt( headerMainNode.clientHeight, 10 );
  }
  const OBSERVE_OPTIONS = {
    rootMargin: `${offsetHeight}px`,
    threshold: 1
  };

  const cb = ( entries ) => {
    entries.forEach( entry => {
      if ( !entry.isIntersecting ) {
        headerNode.classList.add( 'header-main--is-sticked' );
      } else {
        headerNode.classList.remove( 'header-main--is-sticked' );
      }
    } );
  };
  new IntersectionObserver( cb, OBSERVE_OPTIONS ).observe( targetTopNode );
};

const initHeaderSettings = () => {
  initHeaderMenu();
  initMobileDropdownMenu( '.header-nav__menu' );
  observeSiteHeader();
};

export {
  initHeaderSettings
};

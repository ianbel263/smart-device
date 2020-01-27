'use strict';

//  polyfill for IE11
if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var foundationYearElement = document.querySelector('.about__foundation-year');

/*
 * Call the polyfill
 *
 * patternID : the unique ID of the SVG pattern
 * patternURL : the URL to the background-image
 * class : the css-class applied to the SVG
 */
foundationYearElement.backgroundClipPolyfill({
  'patternID' : 'mypattern',
  'patternURL' : '/img/bg-year-ie11.png',
  'class' : 'about__foundation-year'
});


// var logoImg = document.querySelector('.logo img');
// logoImg.style.width = logoImg.offsetWidth + 'px';
// logoImg.style.height = logoImg.offsetHeight + 'px';
// console.log(logoImg.offsetWidth);
// console.log(logoImg.offsetHeight);

var ESC_KEY_CODE = 27;

var footerToggleMenu = document.querySelector('.page-footer__toggle--menu');
var footerToggleAddress = document.querySelector('.page-footer__toggle--address');
var footerMenuList = document.querySelector('.site-menu__list--footer');
var footerAddress = document.querySelector('.page-footer__address');

if (footerMenuList) {
  footerMenuList.classList.remove('site-menu__list--nojs');
}

if (footerAddress) {
  footerAddress.classList.remove('page-footer__address--nojs');
}

if (footerToggleMenu) {
  footerToggleMenu.classList.remove('page-footer__toggle--nojs');
  footerToggleMenu.addEventListener('click', function () {
    footerToggleMenu.classList.toggle('page-footer__toggle--closed');
    footerMenuList.classList.toggle('site-menu__list--show');
    if (footerAddress.classList.contains('page-footer__address--show')) {
      footerAddress.classList.remove('page-footer__address--show');
      footerToggleAddress.classList.add('page-footer__toggle--closed');
    }
  });
}

if (footerToggleAddress) {
  footerToggleAddress.classList.remove('page-footer__toggle--nojs');
  footerToggleAddress.addEventListener('click', function () {
    footerToggleAddress.classList.toggle('page-footer__toggle--closed');
    footerAddress.classList.toggle('page-footer__address--show');
    if (footerMenuList.classList.contains('site-menu__list--show')) {
      footerMenuList.classList.remove('site-menu__list--show');
      footerToggleMenu.classList.add('page-footer__toggle--closed');
    }
  });
}

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closePopupFeedback();
  }
};

var openPopupFeedback = function (evt) {
  evt.preventDefault();
  overlay.classList.add('overlay--show');
  popupFeedback.classList.add('popup-feedback--show');
  visitorName.focus();
  if (isStorageSupport) {
    visitorName.value = storageName;
    visitorPhoneNumber.value = storagePhoneNumber;
    visitorQuestion.value = storageQuestion;
  }

  body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscPress);

};

var closePopupFeedback = function () {
  overlay.classList.remove('overlay--show');
  popupFeedback.classList.remove('popup-feedback--show');
  body.removeAttribute('style');
  document.removeEventListener('keydown', onEscPress);
};

var body = document.querySelector('body');
var buttonCallback = document.querySelector('.page-header__button-callback');
var overlay = document.querySelector('.overlay');
var popupFeedback = document.querySelector('.popup-feedback');
var popupCloseButton = popupFeedback.querySelector('.popup-feedback__button-close');

var visitorName = popupFeedback.querySelector('[name=name]');
var visitorPhoneNumber = popupFeedback.querySelector('[name=phone-number]');
var visitorQuestion = popupFeedback.querySelector('[name=question]');

var isStorageSupport = true;
var storageName = '';
var storagePhoneNumber = '';
var storageQuestion = '';

try {
  storageName = localStorage.getItem('visitorName');
  storagePhoneNumber = localStorage.getItem('visitorPhoneNumber');
  storageQuestion = localStorage.getItem('visitorQuestion');
} catch (err) {
  isStorageSupport = false;
}

if (popupFeedback) {
  popupFeedback.addEventListener('submit', function (evt) {
    evt.preventDefault();

    localStorage.setItem('visitorName', visitorName.value);
    localStorage.setItem('visitorPhoneNumber', visitorPhoneNumber.value);
    localStorage.setItem('visitorQuestion', visitorQuestion.value);

    closePopupFeedback();
  });
}

if (buttonCallback) {
  buttonCallback.addEventListener('click', openPopupFeedback);
}

if (popupCloseButton) {
  popupCloseButton.addEventListener('click', closePopupFeedback);
}

if (overlay) {
  overlay.addEventListener('click', closePopupFeedback);
}

var anchorLinks = document.querySelectorAll('.anchor-link');
anchorLinks.forEach(function (link) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    var blockId = link.getAttribute('href');
    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

var phoneInputs = document.querySelectorAll('input[name=phone-number]');

if (phoneInputs) {
  phoneInputs.forEach(function (phoneInput) {
    phoneInput.addEventListener('focus', function () {
      if (phoneInput.value === '+7(' || phoneInput.value === '') {
        phoneInput.value = '+7(';
      }
    });

    phoneInput.addEventListener('keydown', function (evt) {
      if (!(evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'Backspace' || evt.key === 'Tab')) {
        evt.preventDefault();
      }

      var mask = '+7(111)111-11-11';

      if (/[0-9\+\ \-\(\)]/.test(evt.key)) {
        var currentString = phoneInput.value;
        var currentLength = currentString.length;

        if (/[0-9]/.test(evt.key)) {
          if (mask[currentLength] === '1') {
            phoneInput.value = currentString + evt.key;
          } else {
            for (var i = currentLength; i < mask.length; i++) {
              if (mask[i] === '1') {
                phoneInput.value = currentString + evt.key;
                break;
              }
              currentString += mask[i];
            }
          }
        }
      }
    });
  });
}

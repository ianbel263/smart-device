'use strict';

// var header = document.querySelector('header');
// var footer = document.querySelector('footer');
// var sections = document.querySelectorAll('section');

// // header.style.display = 'none';
// footer.style.display = 'none';

// sections.forEach(function(el) {
//   el.style.display = 'none';
// });
// console.log('sections', sections)

// sections[0].style.display = 'block';
// sections[1].style.display = 'block';
// sections[2].style.display = 'block';
// sections[3].style.display = 'block';
// sections[4].style.display = 'block';
// // sections[5].style.display = 'block';







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
  body.style = '';
  document.removeEventListener('keydown', onEscPress);
};

var body = document.querySelector('body');
var buttonCallback = document.querySelector('.page-header__button-callback');
var overlay = document.querySelector('.overlay');
var popupFeedback = document.querySelector('.popup-feedback');
var popupCloseButton = popupFeedback.querySelector('.popup-feedback__button-close');
// var popupFeedbackSubmitButton = popupFeedback.querySelector('.popup-feedback__button');

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

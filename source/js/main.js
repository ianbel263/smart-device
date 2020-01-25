'use strict';

!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

window.__forceSmoothScrollPolyfill__ = true;
// smoothscroll.polyfill ();

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

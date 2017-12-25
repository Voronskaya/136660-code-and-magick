'use strict';
(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var setupSimilarElement = document.querySelector('.setup-similar');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupElement = document.querySelector('.setup');
  var setupOpenIconElement = setupOpenElement.querySelector('.setup-open-icon');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var setupUserNameElement = setupElement.querySelector('.setup-user-name');
  var wizardCoat = setupElement.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupElement.querySelector('.setup-wizard .wizard-eyes');
  var setupFireballWrap = setupElement.querySelector('.setup-fireball-wrap');
  var setupPWizardWrapElement = setupElement.querySelector('.setup-wizard-wrap');

  setupSimilarElement.classList.remove('hidden');

  var openPopup = function () {
    setupElement.classList.remove('hidden');
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
  };

  var keyDownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      if (document.activeElement === setupOpenIconElement) {
        openPopup();
      } else if (document.activeElement === setupCloseElement) {
        closePopup();
      }
    } else if (evt.keyCode === ESC_KEYCODE) {
      if (document.activeElement !== setupUserNameElement) {
        closePopup();
      }
    }
  };

  var svgClickHandler = function (evt) {
    if (wizardCoat === evt.target) {
      wizardCoat.style.fill = window.util.getRandomElement(COAT_COLORS);
    } else if (wizardEyes === evt.target) {
      wizardEyes.style.fill = window.util.getRandomElement(EYES_COLORS);
    }
  };

  var setupFireballClickHandler = function () {
    setupFireballWrap.style.background = window.util.getRandomElement(FIREBALL_COLORS);
  };

  document.addEventListener('keydown', keyDownHandler);

  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupPWizardWrapElement.addEventListener('click', svgClickHandler);
  setupFireballWrap.addEventListener('click', setupFireballClickHandler, true);
  window.setup.renderWizardList();
})();

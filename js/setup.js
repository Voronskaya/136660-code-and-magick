'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupSimilarElement = document.querySelector('.setup-similar');
var setupSimilarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
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

var getRandomNumber = function (length) {
  return Math.floor(Math.random() * length);
};

var getRandomElement = function (arr) {
  var randomIndex = getRandomNumber(arr.length);
  return arr[randomIndex];
};

var getFullName = function (name, surname) {
  return getRandomElement(name) + ' ' + getRandomElement(surname);
};

var getWizard = function () {
  return {
    name: getFullName(NAMES, SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
};

var createWizardList = function (length) {
  var wizardList = [];
  for (var i = 0; i < length; i++) {
    wizardList.push(getWizard());
  }
  return wizardList;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var similarNameWizard = wizardElement.querySelector('.setup-similar-label');
  var similarWizardCoat = wizardElement.querySelector('.wizard-coat');
  var similarWizardEye = wizardElement.querySelector('.wizard-eyes');

  similarNameWizard.textContent = wizard.name;
  similarWizardCoat.style.fill = wizard.coatColor;
  similarWizardEye.style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizardList = function () {
  var wizardsList = createWizardList(4);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(renderWizard(wizardsList[i]));
  }
  setupSimilarListElement.appendChild(fragment);
};

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
    wizardCoat.style.fill = getRandomElement(COAT_COLORS);
  } else if (wizardEyes === evt.target) {
    wizardEyes.style.fill = getRandomElement(EYES_COLORS);
  }
};

var setupFireballClickHandler = function () {
  setupFireballWrap.style.background = getRandomElement(FIREBALL_COLORS);
};

document.addEventListener('keydown', keyDownHandler);

setupOpenElement.addEventListener('click', function () {
  openPopup();
});

setupCloseElement.addEventListener('click', function () {
  closePopup();
});
// не знаю как назвать слушателeй
setupPWizardWrapElement.addEventListener('click', svgClickHandler);
setupFireballWrap.addEventListener('click', setupFireballClickHandler, true);

renderWizardList();

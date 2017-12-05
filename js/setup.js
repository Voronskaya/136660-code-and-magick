'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupSimilarElement = document.querySelector('.setup-similar');
var setupSimilarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = document.querySelector('.setup-close');
var setupUserNameElement = document.querySelector('.setup-user-name');

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

var checkFocusUserName = function () {
  return document.activeElement === setupUserNameElement;
};

var keyDownHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  } else if (evt.keyCode === ESC_KEYCODE) {
    if (!checkFocusUserName()) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', keyDownHandler);
};

var closePopup = function () {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', keyDownHandler);
};

setupOpenElement.addEventListener('click', function () {
  openPopup();
});

setupOpenElement.addEventListener('keydown', keyDownHandler);

setupCloseElement.addEventListener('click', function () {
  closePopup();
});

renderWizardList();

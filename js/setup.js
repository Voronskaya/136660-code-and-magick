'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');

setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

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

var Wizard = function () {
  this.name = getFullName(NAMES, SURNAMES);
  this.coatColor = getRandomElement(COAT_COLORS);
  this.eyesColor = getRandomElement(EYES_COLORS);
};

var createWizardList = function (length) {
  var wizardList = [];
  for (var i = 0; i < length; i++) {
    wizardList.push(new Wizard());
  }
  return wizardList;
};

var renderWizard = function (obj) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var similarNameWizard = wizardElement.querySelector('.setup-similar-label');
  var similarWizardCoat = wizardElement.querySelector('.wizard-coat');
  var similarWizardEye = wizardElement.querySelector('.wizard-eyes');

  similarNameWizard.textContent = obj.name;
  similarWizardCoat.style.fill = obj.coatColor;
  similarWizardEye.style.fill = obj.eyesColor;
  return wizardElement;
};

var renderWizardList = function () {
  var wizardsList = createWizardList(4);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(renderWizard(wizardsList[i]));
  }
  return setupSimilarList.appendChild(fragment);
};
renderWizardList(Wizard);

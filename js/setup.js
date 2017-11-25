'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var listCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var listEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setupSimilar = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var getRandomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var getRandomElement = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var randomIndex = getRandomNumber(arr);
    var item = arr[randomIndex];
  }
  return item;
};

var getFullName = function (name, surname) {
  return getRandomElement(name) + ' ' + getRandomElement(surname);
};

// Не получается сделать ф-ию Wizard чистой. Пробовала этот вариант,
// но он не работает:
// var Wizard = function (name, surname, coatColor, eyesColor) {
//   this.name = getFullName(name, surname);
//   this.coatColor = getRandomElement(coatColor);
//   this.eyesColor = getRandomElement(eyesColor);
// }
// renderListWizard(Wizard(names, surnames, listCoatColors, listEyesColors));

var Wizard = function () {
  this.name = getFullName(names, surnames);
  this.coatColor = getRandomElement(listCoatColors);
  this.eyesColor = getRandomElement(listEyesColors);
};

// Получила массив с объектами.
// Пробовала здесь не задавать перебор, не получилось.
var getRandomListObjects = function (Obj, times) {
  var listObjects = [];
  for (var i = 0; i < times; i++) {
    listObjects.push(new Obj());
  }
  return listObjects;
};

var renderWizard = function (obj) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var similarNameList = wizardElement.querySelector('.setup-similar-label');
  var similarWizardCoat = wizardElement.querySelector('.wizard-coat');
  var similarWizardEye = wizardElement.querySelector('.wizard-eyes');

  similarNameList.textContent = obj.name;
  similarWizardCoat.style.fill = obj.coatColor;
  similarWizardEye.style.fill = obj.eyesColor;
  return wizardElement;
};

// Не знаю как избавиться от четверки.
// Заносила var listWizards в цикл for, но как нужно не работает.
// Наверное после этого кода, я больше никогда не буду смотреть Гарри Поттера.
var renderListWizard = function (obj) {
  var listWizards = getRandomListObjects(obj, 4);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < listWizards.length; i++) {
    fragment.appendChild(renderWizard(listWizards[i]));
  }
  return similarList.appendChild(fragment);
};
renderListWizard(Wizard);

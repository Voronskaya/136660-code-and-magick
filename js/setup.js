'use strict';
(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var setupSimilarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var getWizard = function () {
    return {
      name: window.util.getFullName(NAMES, SURNAMES),
      coatColor: window.util.getRandomElement(COAT_COLORS),
      eyesColor: window.util.getRandomElement(EYES_COLORS)
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

  window.setup = {
    renderWizardList: function () {
      var wizardsList = createWizardList(4);
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < wizardsList.length; i++) {
        fragment.appendChild(renderWizard(wizardsList[i]));
      }
      setupSimilarListElement.appendChild(fragment);
    }
  };
})();

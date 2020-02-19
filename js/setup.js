'use strict';

// массив имен
var namesArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

// массив фамилий
var surnamesArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

// выбор случайного элемента массива
function getRandomElement(arrName) {
  return arrName[(Math.floor(arrName.length * (Math.random())))];
}

// массив волшебников
var wizards = [
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(window.colorize.coatColorsArr),
    eyesColor: getRandomElement(window.colorize.eyesColorsArr)
  },
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(window.colorize.coatColorsArr),
    eyesColor: getRandomElement(window.colorize.eyesColorsArr)
  },
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(window.colorize.coatColorsArr),
    eyesColor: getRandomElement(window.colorize.eyesColorsArr)
  },
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(window.colorize.coatColorsArr),
    eyesColor: getRandomElement(window.colorize.eyesColorsArr)
  }
];

// отрисовка волшебника
function renderWizard(wizard) {
  var wizardElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

// создание фрагмента
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

document.querySelector('.setup-similar-list').appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

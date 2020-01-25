'use strict';

// массив имен
var namesArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

// массив фамилий
var surnamesArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

// массив цветов плаща
var coatColorsArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

// массив цветов глаз
var eyesColorsArr = ['black', 'red', 'blue', 'yellow', 'green'];

// выбор случайного элемента массива
var getRandomElement = function (arrName) {
  return arrName[(Math.floor(arrName.length * (Math.random())))];
};

// массив волшебников
var wizards = [
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(coatColorsArr),
    eyesColor: getRandomElement(eyesColorsArr)
  },
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(coatColorsArr),
    eyesColor: getRandomElement(eyesColorsArr)
  },
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(coatColorsArr),
    eyesColor: getRandomElement(eyesColorsArr)
  },
  {
    name: getRandomElement(namesArr) + ' ' + getRandomElement(surnamesArr),
    coatColor: getRandomElement(coatColorsArr),
    eyesColor: getRandomElement(eyesColorsArr)
  }
];

// отрисовка волшебника
var renderWizard = function (wizard) {
  var wizardElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// создание фрагмента
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

document.querySelector('.setup-similar-list').appendChild(fragment);

// показываем блоки setup и setup-similar
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');



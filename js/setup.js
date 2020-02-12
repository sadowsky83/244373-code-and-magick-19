'use strict';

// массив имен
var namesArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

// массив фамилий
var surnamesArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

// массив цветов плаща
var coatColorsArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

// массив цветов глаз
var eyesColorsArr = ['black', 'red', 'blue', 'yellow', 'green'];

// массив цветов фаерболов
var fireballColorsArr = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWisardCoat = setup.querySelector('.wizard-coat');
var setupWisardEyes = setup.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var inputWisardCoat = document.querySelector('#coat-color');
var inputWisardEyes = document.querySelector('#eyes-color');
var inputFireball = document.querySelector('#fireball-color');

// выбор случайного элемента массива
function getRandomElement(arrName) {
  return arrName[(Math.floor(arrName.length * (Math.random())))];
}

// удаление обработчика
function onPopupEscPress(evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
}

// открытие / закрытие попапа
function openPopup() {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
}

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

// показываем блоки setup и setup-similar
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// смена цвета элемента при клике
setupWisardCoat.addEventListener('click', function () {
  var color = getRandomElement(coatColorsArr);
  setupWisardCoat.style.fill = color;
  inputWisardCoat.value = color;
});

setupWisardEyes.addEventListener('click', function () {
  var color = getRandomElement(eyesColorsArr);
  setupWisardEyes.style.fill = color;
  inputWisardEyes.value = color;
});

setupFireball.addEventListener('click', function () {
  var color = getRandomElement(fireballColorsArr);
  setupFireball.style.background = color;
  inputFireball.value = color;
});



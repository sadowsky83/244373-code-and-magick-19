'use strict';

(function () {
  // массив цветов плаща
  var coatColorsArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  // массив цветов глаз
  var eyesColorsArr = ['black', 'red', 'blue', 'yellow', 'green'];

  // массив цветов фаерболов
  var fireballColorsArr = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
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

})();

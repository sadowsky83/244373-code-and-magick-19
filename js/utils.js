'use strict';

(function () {

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

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

    setup.style.top = '80px';
    setup.style.left = '';
  }

  function closePopup() {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  }

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

})();


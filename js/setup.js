'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');

  var maxSimilarWizardCount = 4;

  setupWizardForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupWizardForm), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });

  // отрисовка волшебника
  function renderWizard(wizard) {
    var wizardElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  // создание фрагмента
  function onSuccessLoad(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < maxSimilarWizardCount; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    document.querySelector('.setup-similar-list').appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  }

  function onErrorLoad(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.load(onSuccessLoad, onErrorLoad);
})();

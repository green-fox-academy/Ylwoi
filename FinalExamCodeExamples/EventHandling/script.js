'use strict';

(function eventHandling() {
  let button = document.querySelector('button');
  let text = document.querySelector('p');

  button.addEventListener('click', () => {
    text.innerText = 'This is an event!'
  })
})();
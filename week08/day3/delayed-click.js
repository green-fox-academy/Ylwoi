/**
 * Created by cw on 2017-05-10.
 */
var button = document.querySelector('button');
var text = document.querySelector('p');

button.addEventListener('click', function () {
   setTimeout(function () {
       text.style.visibility = 'visible';
   }, 2000)
});
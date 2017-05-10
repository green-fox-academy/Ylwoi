/**
 * Created by cw on 2017-05-10.
 */
var button = document.querySelector('button');
var text = document.querySelector('p');

setTimeout(function () {
    var count = 0;
    button.addEventListener('click', function () {
        if (count === 2) {
            text.style.visibility = 'visible';
        }
        count++;
    })
}, 5000);
/**
 * Created by cw on 2017-05-10.
 */
'use strict';

var createCandy = document.querySelector('.create-candies');
var buyLollipop = document.querySelector('.buy-lollypops');
var candyMachine = document.querySelector('.candy-machine');

var candyStatus = document.querySelector('.candies');
var lollyPopStatus = document.querySelector('.lollypops');
var speedStatus = document.querySelector('.speed');

var candyCounter = candyStatus.textContent;
var lollyPopCounter = lollyPopStatus.textContent.length;
var speedCounter = speedStatus.textContent;

createCandy.addEventListener('click', function () {
    candyCounter++;
    candyStatus.textContent = candyCounter;
});

buyLollipop.addEventListener('click', function () {
    if (candyCounter >= 100) {
        candyCounter -= 100;
        candyStatus.textContent = candyCounter;
        lollyPopStatus.textContent +='🍭';
    }
});

setInterval(function () {
    if (lollyPopCounter % 10 === 0) {
        speedCounter = lollyPopCounter/10;
        speedStatus.textContent = speedCounter;
    }
}, 1);
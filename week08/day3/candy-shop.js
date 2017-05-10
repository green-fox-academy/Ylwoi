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

var candyCounter = parseInt(candyStatus.textContent);
var lollyPopCounter = lollyPopStatus.textContent.length/2;
var speedCounter = parseInt(speedStatus.textContent);

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
    if (lollyPopCounter >= 10) {
        speedCounter = lollyPopCounter/10;
        speedStatus.textContent = speedCounter;
        candyCounter += speedCounter;
        candyStatus.textContent = candyCounter;
    }

}, 1000);
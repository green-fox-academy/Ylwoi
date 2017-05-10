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
var lollyPopCounter = parseInt(lollyPopStatus.textContent.length/2);
var speedCounter = parseInt(speedStatus.textContent);

var rain = 1;

createCandy.addEventListener('click', function () {
    candyCounter++;
    candyStatus.textContent = candyCounter;
});

buyLollipop.addEventListener('click', function () {
    if (candyCounter >= 100) {
        candyCounter -= 100;
        candyStatus.textContent = candyCounter;
        lollyPopStatus.textContent +='🍭';
        lollyPopCounter++;
    }
});

candyMachine.addEventListener('click', function () {
    rain *= 10;
});

var engine = setInterval(function () {
    if (lollyPopCounter >= 10) {
        speedCounter = Math.floor(lollyPopCounter/10)+rain;
        speedStatus.textContent = speedCounter;
        candyCounter += speedCounter;
        candyStatus.textContent = candyCounter;
    } if (candyCounter >= 10000) {
        var winText = document.createElement('h1');
        winText.textContent = 'YOU WIN!!!';
        document.body.appendChild(winText);
        clearInterval(engine);

    }

}, 1000);
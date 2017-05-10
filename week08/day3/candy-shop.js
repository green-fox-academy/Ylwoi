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

createCandy.addEventListener('click', function () {
    candyCounter++;
    candyStatus.textContent = candyCounter;
});
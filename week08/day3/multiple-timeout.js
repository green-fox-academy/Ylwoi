/**
 * Created by cw on 2017-05-10.
 */
'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function applePrinter() {
    console.log('apple');
}

function pearPrinter() {
    console.log('pear');
}

function melonPrinter() {
    console.log('melon');
}

function grapesPrinter() {
    console.log('grapes');
}

applePrinter();
setTimeout(pearPrinter, 1000);
setTimeout(melonPrinter, 3000);
setTimeout(grapesPrinter, 5000);
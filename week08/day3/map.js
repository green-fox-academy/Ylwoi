/**
 * Created by cw on 2017-05-10.
 */
'use strict';

var fruits = [
    'melon',
    'apple',
    'strawberry',
    'blueberry',
    'pear',
    'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

function eCounter(word) {
    var wordArray = word.split('');
    var counter = 0;
    wordArray.forEach(function (letter) {
        if (letter === 'e') {
            counter++;
        }
    });
    return counter;
}

var letterNumbers = fruits.map(eCounter);
console.log(letterNumbers);
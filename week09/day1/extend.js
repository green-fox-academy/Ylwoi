/**
 * Created by cw on 2017-05-15.
 */
'use strict';

// Adds a and b, returns as result
const addNumbers = function(a, b) {
    if ( typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid value')
    }
    return a + b;
};

// Returns the highest value from the three given params
const maxOfThree = function(a, b, c) {
    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('Invalid value')
    }
    return Math.max(a,b,c)
};

//Returns the median value of a list given as param
const median = function(pool){
    pool = pool.sort();
    if (typeof pool[pool.length-1] === 'string') {
        return 'Invalid value'
    }
    else if (pool.length % 2 === 0) {
        return (pool[pool.length/2-1] + pool[pool.length/2]) / 2
    } else {
        return pool[(pool.length+1) / 2 - 1]
    }
};

// Returns true if the param is a vovel
const isVovel = function(char){
    var vovels = 'aeiouéáőűöüóí';
    return char in vovels.split('')
};

// Create a method that translates hungarian into the teve language
const translate = function(hungarian) {
    let text = hungarian.split('');
    let teve = '';
    text.forEach(function(char){
        if (isVovel(char)){
            teve += char + 'v'+ char;
        }
    });
    return teve;
};

module.exports = {
    addNumbers: addNumbers,
    maxOfThree: maxOfThree,
    median: median,
    isVovel: isVovel,
    translate: translate
};
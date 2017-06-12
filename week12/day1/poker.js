/**
 * Created by cw on 2017-06-12.
 */
'use strict';

const validator = function(inputString) {
    let inputArray = inputString.split(' ');
    let condition = false;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            if (i != j && inputArray[i] === inputArray[j]) {
                condition = false;
            } else {
                condition = true;
            }
        }
    }
    console.log(condition);
    return condition;
//    let blackHand = inputString.split(' ', 1,5);
//    let whiteHand = inputString.split(' ', 7,11);
};

validator('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH')

module.exports = validator;
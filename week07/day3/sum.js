/**
 * Created by cw on 2017-05-03.
 */
'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum (number) {
    var sumNum = 0;
    for (var i = 0; i < number; i++){
        sumNum += i;
    }
    return sumNum
}

console.log(sum(5));
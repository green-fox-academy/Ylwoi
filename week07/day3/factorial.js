/**
 * Created by cw on 2017-05-03.
 */
'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(num) {
    var sum = 1;
    for (var i = num; i > 0; i--) {
        sum *= i;
    }
    return sum
}

console.log(factorio(5));
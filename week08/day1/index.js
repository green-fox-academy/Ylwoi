'use strict';
var test = require('tape');
// [0,0,0,4,5,6,7,8,9] => ok
var okTest = [1,2,3,4,5,6,7,8,9];
var negativeNum =  [2,-1,3,4,5,6,7,8,9]; //=> Should fail
var biggerNum =  [10,8,7,6,5,1,2,4,9]; //=> Should fail
var intWrong = [9,8,7,6,5,1,2,4,'u']; // => Should fail (non integer)
var lengthShort = [1,2,3];
var moreNum = [9,0,0,6,5,4,7,8,9];
function Validator (input) {
    if (input && input.length === 9){
        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] !== "number" || input[i] < 0 || input[i] > 9) {
                return false;
            }
        }
        input.sort();
        for (var i = 0; i < input.length - 1; i++) {
            if (input[i] > 0) {
                if (input[i] === input[i+1]) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return false;
    }
}


test ('lineLength', function (t) {
    t.equal(Validator(lengthShort), false);
    t.equal(Validator(okTest), true);
    t.end();
});
test ('testInt', function (t){
    t.equal(Validator(intWrong), false);
    t.equal(Validator(okTest), true);
    t.end();
});
test ('testMore', function (t){
    t.equal(Validator(moreNum), false);
    // t.equal(Validator(okTest), true);
    t.end();
});
test ('testLessOrMoreValue', function (t) {
    t.equal(Validator(biggerNum), false);
    t.equal(Validator(negativeNum), false);
    t.end();
});
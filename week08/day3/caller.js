/**
 * Created by cw on 2017-05-10.
 */
'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
    console.log(num);
}

function selectLastEvenNumber(array, callback) {
    var filterArr = array.filter(function (e) {
        return e % 2 === 0;
    });
    callback(filterArr[filterArr.length-1]);

}
selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8
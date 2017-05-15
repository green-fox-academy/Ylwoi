/**
 * Created by cw on 2017-05-15.
 */
'use strict';

var object = {
    sum: function (list) {
        let sum = 0;
        list.forEach(function (e) {
            if (typeof e === 'number'){
                sum += e;
            }
        });
        return sum;
    }
};

console.log(object.sum([1,2,3]));

module.exports = object.sum;
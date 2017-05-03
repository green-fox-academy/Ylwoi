/**
 * Created by cw on 2017-05-03.
 */

'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
var matrix = [];
var size = 8;
for (var i = 0, k = size-1; i < size; i++, k--) {
    matrix[i] = new Array(size);
    for (var j = 0; j < size; j++) {
        if (j === k) {
            matrix[i][j] = 1;
        } else {
            matrix[i][j] = 0;
        }
    }
}
matrix.forEach(function (e) {
    console.log(e.toString().split(',').join(' '));
});
//console.log(matrix);
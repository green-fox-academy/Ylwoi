/**
 * Created by cw on 2017-05-03.
 */
'use strict';
// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj = [3, 4, 5, 6, 7];
aj.reverse();
console.log(aj);

var temp = new Array(aj.length);
for (var i = aj.length- 1, j = 0; i >= 0; i--, j++) {
    temp[j] = aj[i];
}
console.log(temp);
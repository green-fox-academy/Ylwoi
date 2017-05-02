/**
 * Created by cw on 2017-05-02.
 */
'use strict';

var lineCount = 16;
var triangle = '*';
var space = ' ';

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
for (var i = 0, j = 1, k = lineCount; i < lineCount; i++, j += 2, k --) {
    console.log(space.repeat(k), triangle.repeat(j));
}
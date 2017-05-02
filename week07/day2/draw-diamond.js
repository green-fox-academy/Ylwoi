/**
 * Created by cw on 2017-05-02.
 */
'use strict';

var lineCount = 7;
var star = '*';
var space = ' ';


// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (var i = 0, j = 1, k = lineCount; i < lineCount; i++, j += 2, k--) {
    if (i < (lineCount-1)/2) {
        console.log(space.repeat(k), star.repeat(j));
    } else {
        for (;i < lineCount; i++, j -= 2, k++) {
            console.log(space.repeat(k), star.repeat(j));
        }
    }
}
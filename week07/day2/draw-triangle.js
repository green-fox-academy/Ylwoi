/**
 * Created by cw on 2017-05-02.
 */
'use strict';

var lineCount = 4;
var triangle = '*';

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for (var i = 1; i <= lineCount;i++) {
    console.log(triangle.repeat(i));
}
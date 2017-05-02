/**
 * Created by cw on 2017-05-02.
 */
'use strict';

var lineCount = 6;
var block = '%';

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
for (var i = 0; i < lineCount; i++) {
    if (i === 0 || i === lineCount-1) {
        console.log(block.repeat(5));
    } else {
        console.log(block, ' ', block);
    }
}
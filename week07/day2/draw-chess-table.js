/**
 * Created by cw on 2017-05-02.
 */
// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
var oddLine = '% ';
var evenLine = ' %';

for (var i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        console.log(evenLine.repeat(8));
    } else {
        console.log(oddLine.repeat(8));
    }
}
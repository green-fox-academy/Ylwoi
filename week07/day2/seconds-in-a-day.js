/**
 * Created by cw on 2017-05-02.
 */
'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

console.log('Reaming seconds: ', (24-currentHours)*3600 + (60-currentMinutes)*60 + (60-currentSeconds));
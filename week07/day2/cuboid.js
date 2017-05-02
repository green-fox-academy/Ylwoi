/**
 * Created by cw on 2017-05-02.
 */
'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var side_a = 10;
var side_b = 8;
var side_c = 6;

console.log('Surface Area: ', 2*(side_a*side_b+side_b*side_c+side_a*side_c));
console.log('Volume: ', side_a*side_b*side_c);

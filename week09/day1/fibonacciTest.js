/**
 * Created by cw on 2017-05-15.
 */
'use strict';

var test = require('tape');
var fibonacci = require('./fibonacci');

test('6thFibonacciNumber', function (t) {
    let index = 6;
    let expected = 8;

    t.equal(fibonacci(index), expected);
    t.end();
});

test('fibonacciWithString', function (t) {
    let index = '1';
    let expected = 'It is not an integer';

    t.equal(fibonacci(index), expected);
    t.end();
});

test('fibonacciWithFloat', function (t) {
    let index = 5.6;
    let expected = 8;

    t.equal(fibonacci(index), expected);
    t.end();
});
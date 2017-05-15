/**
 * Created by cw on 2017-05-15.
 */
'use strict';

var test = require('tape');
var counter = require('./countLetters.js');

test('letterCounting', function (t) {
    let word = 'letter';
    let expected = { l: 1, e: 2, t: 2, r: 1 };

    t.deepEquals(counter(word), expected);
    t.end();
});

test('letterCountingWithNumbers', function (t) {
    let word = 'letter12';
    let expected = { l: 1, e: 2, t: 2, r: 1, 1: 1, 2: 1 };

    t.deepEquals(counter(word), expected);
    t.end();
});

test('letterCountingOnlyNumbers', function (t) {
    let word = 110011001;
    let expected = { 1: 5, 0: 4};

    t.deepEquals(counter(word), expected);
    t.end();
});
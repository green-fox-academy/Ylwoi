/**
 * Created by cw on 2017-05-15.
 */
'use strict';

var test = require('tape');
var sum = require('./sum.js');

test('emptyList', function (t) {
    let list = [];
    let expected = 0;

    t.equal(sum(list), expected);
    t.end();
});

test('oneElement', function (t) {
    let list = [3];
    let expected = 3;

    t.equal(sum(list), expected);
    t.end();
});

test('multiplieElements', function (t) {
    let list = [2,3,5];
    let expected = 10;

    t.equal(sum(list), expected);
    t.end();
});

test('withNull', function (t) {
    let list = [null, 2];
    let expected = 2;

    t.equal(sum(list), expected);
    t.end();
});

test('withString', function (t) {
    let list = [1, 'alma', 4];
    let expected = 5;

    t.equal(sum(list), expected);
    t.end();
});
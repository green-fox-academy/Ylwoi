/**
 * Created by cw on 2017-06-12.
 */
'use strict';

var test = require('tape');
var poker = require('./poker.js');

test('No same cards', function (t) {
    t.equal(poker.validator('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH'), 1);
    t.equal(poker.validator('Black: 2H 3D 5S 9C KD  White: 9C 3H 4S 8C AH'), 0);
    t.end();
});

test('High card wins', function (t) {
    t.equal(poker.comparer('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH'), 'White wins. - with high card: Ace ');
    t.end();
});
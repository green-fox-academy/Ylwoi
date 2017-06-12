/**
 * Created by cw on 2017-06-12.
 */
'use strict';

var test = require('tape');
var validator = require('./poker.js')

test('No same cards', function (t) {
    t.equal(validator('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH'), true);
    t.end();
});
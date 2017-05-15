/**
 * Created by cw on 2017-05-15.
 */
'use strict';

var test = require('tape');
var getApples = require('./apples.js');

test('isApple', function (t) {
    var actual = getApples();
    var expected = 'apples';

    t.equal(actual, expected);
    t.end();
});
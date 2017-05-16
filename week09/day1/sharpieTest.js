/**
 * Created by cw on 2017-05-15.
 */
'use strict';

var test = require('tape');
var sharpie = require('../../week08/day2/sharpie');

test('sharpie instantiate', function (t) {
    let sharp1 = new sharpie('blue', 20);

    t.equal(sharp1.color, 'blue');
    t.equal(sharp1.width, 20);
    t.end()
});

test('sharpie ink amount test', function (t) {
    let sharp1 = new sharpie('blue', 20);

    t.equal(sharp1.inkAmount, 100);
    t.end();
});

test('sharpie ink amount test', function (t) {
    let sharp1 = new sharpie('blue', 20);
    sharp1.use();

    t.equal(sharp1.inkAmount, 80);
    t.end();
});

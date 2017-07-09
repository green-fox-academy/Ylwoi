'use strict';

const test = require('tape');
const script = require('./script');

test('adding two numbers', (t) => {
  t.equal(script.adder(5,5), 10);
  t.end();
});

test('counting an array elements', (t) => {
  let words = ['one', 'two', 'three', 'four'];
  t.equal(script.elementCounter(words),4);
  t.end();
});
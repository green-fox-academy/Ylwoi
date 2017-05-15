/**
 * Created by cw on 2017-05-15.
 */
'use strict';

var test = require('tape');
var anagram = require('./anagram.js');

test('isAnagram', function (t) {
    let word1 = 'Madam Curie';
    let word2 = 'Radium came';

    t.equal(anagram(word1, word2), true);
    t.end();
});

test('notAnagram', function (t) {
    let word1 = 'Madam';
    let word2 = 'Madar';

    t.equal(anagram(word1, word2), false);
    t.end();
});
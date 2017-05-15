/**
 * Created by cw on 2017-05-15.
 */
'use strict';

function countLetters(string) {
    let word = string.toString().toLowerCase().split('');
    let dict = {};
    word.forEach(function (letter) {
        if (letter in dict) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    });
    return dict;
}
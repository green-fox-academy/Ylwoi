/**
 * Created by cw on 2017-06-05.
 */
'use strict';

const jsonWords = require('./words.json');
const words = jsonWords.words;

const validator = function (feedback, scale, email) {
    if (feedbackValidator(feedback) && scale >= 10 && email.includes('@')) {
        return true
    } else {
        return false
    }
};

const feedbackValidator = function (feedback) {
    let feedbackWords = feedback.split(' ');
    let count = 0;
    for (let i = 0; i < feedbackWords.length; i++) {
        if (words.includes(feedbackWords[i])) {
            count++
        }
    }
    if (count >= 1) {
        return true
    }
};

module.exports = validator;
/**
 * Created by cw on 2017-06-05.
 */
'use strict';

const test = require('tape');
var validator = require('./validator.js');


test("validator accepts valid email, a scale of 15 and positive feedback", function (t){
    t.equal(validator('fortuitous great super', '15', 'sdfsdf@fff.com'), true);
    t.end();
});

test("validator rejects unfilled email, a scale of 15 and positive feedback", function (t){
    t.equal(validator('fortuitous great super', '15', ''), false);
    t.end();
});

test("validator rejects valid email, a scale of 9 and positive feedback", function (t){
    t.equal(validator('fortuitous great super', '9', 'sdfsdf@fff.com'), false);
    t.end();
});

test("validator rejects valid email, a scale of 15 and negative feedback", function (t){
    t.equal(validator('neg', '15', 'sdfsdf@fff.com'), false);
    t.end();
});

test("validator rejects valid invalid email, a scale of 15 and positive feedback", function (t){
    t.equal(validator('fortuitous great super', '15', 'sdfsdffff.com'), false);
    t.end();
});

test("validator rejects valid email, a negative number and positive feedback", function (t){
    t.equal(validator('super', '-1', 'sdfsdf@fff.com'), false);
    t.end();
});

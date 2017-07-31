/**
 * Created by cw on 2017-05-16.
 */
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/assets/', express.static('assets'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function (req, res) {
    var inp = parseInt(req.query.input);
    if (inp) {
        res.send({
            received: inp,
            result: inp*2
        })
    } else {
        res.send({
            error: 'Please provide an input!'
        })
    }

});

app.get('/greeter', function (req, res) {
    var name = req.query.name;
    var title = req.query.title;
    if (name && title) {
        res.send({
            welcome_message: "Oh, hi there " + name + ", my dear " + title + "!"
        })
    } else if (!name) {
        res.send({
            error: 'Please provide a name!'
        })
    } else if (!title) {
        res.send({
            error: 'Please provide a title!'
        })
    }
});

app.get('/appenda/:appendable', function (req, res) {
    function appendA (word) {
        return word + 'a'
    }
    var appendable = req.params.appendable;
    if (appendable) {
        res.send({
            "appended": appendA(appendable)
        })
    } else {
        res.send(status(404))
    }

});

app.post('/dountil/:operation/', function (req, res) {
    var operation = req.params.operation;
    var until = req.body.until;

    if (operation === 'factor' && until) {
        let sum = 1;
        for (let i = until; i > 0; i--) {
            sum *= i;
        }
        res.send({
            result: sum
        })
    } else if (operation === 'sum' && until) {
        let sum = 0;
        for (let i = 0; i <= until; i++) {
            sum += i;
        }
        res.send({
            result: sum
        })
    } else {
        res.send({
            error: 'Please provide a number!'
        })
    }
});

app.post('/arrays', function (req, res) {
    var what = req.body.what;
    var numbers = req.body.numbers;

});

app.listen(8080);
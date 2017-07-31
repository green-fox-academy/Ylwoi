/**
 * Created by cw on 2017-06-11.
 */
'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(4000, function (err) {
    if (err) {
        console.log('Error starting server')
    } else {
        console.log('Server started..')
    }
});
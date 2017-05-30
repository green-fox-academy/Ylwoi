/**
 * Created by cw on 2017-05-30.
 */
'use strict';

const express = require('express');

const app = express();

app.use('/assets', express.static('assets'));
app.use('/img', express.static('img'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});


app.listen(3000);
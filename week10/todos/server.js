/**
 * Created by cw on 2017-05-30.
 */
'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use('/assets', express.static('assets'));
app.use('/img', express.static('img'));

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todos'
});

dbConn.connect(function (err) {
    if (err) {
        console.log('Error to connecting to DB')
    } else {
        console.log('Connection established')
    }
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});


app.listen(3000);
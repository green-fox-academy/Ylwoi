/**
 * Created by cw on 2017-05-19.
 */
'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'posts'
});

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting to DB');
        return
    } else {
        console.log('Connection Established')
    }
});


app.listen(3000);
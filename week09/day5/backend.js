/**
 * Created by cw on 2017-05-19.
 */
'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'reddit'
});

const queryAllPosts = 'SELECT * FROM posts';

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting to DB');
        return
    } else {
        console.log('Connection Established')
    }
});

app.get('/', function (req, res) {
    conn.query(queryAllPosts, function (err, rows) {
        if (err) {
            console.log('ERROR, something wrong with the query', err);
        } else {
            res.send(rows)
        }
    });
});

app.listen(3000);
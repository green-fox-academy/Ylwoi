/**
 * Created by cw on 2017-05-19.
 */
'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
            var results = {'posts': rows};
            res.send(results)
        }
    });
});

app.post('/post', function (req, res) {
    conn.query("INSERT INTO posts  VALUES (NULL, '" + req.body.title + "', '" + req.body.href + "', 'Anonymus', 0, " + Date.now() + ", 0 )");
});

app.listen(3000);
/**
 * Created by cw on 2017-06-02.
 */
'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const validator = require('./validator.js');

const app = express();

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

let errorMsg = {
    "status": "error",
    "message": "thank you"
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'secretprojects'
});

connection.connect(function (err) {
    if (err) {
        console.log("ERROR to connecting DB")
    } else {
        console.log('Connection established')
    }
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html' );
});

app.post('/exam', function (req, res) {
    console.log(req.body);
    let feedback = req.body.feedback;
    let scale = req.body.scale;
    let email = req.body.email;
    let okMsg = {
        "status": "ok",
        "projects": []
    };

    let validation = validator(feedback, scale, email);
    if (validation) {
        connection.query('SELECT project_name FROM projects', function (err, rows) {
            if (err) throw err;
            rows.forEach(function (row) {
                okMsg['projects'].push(row.project_name)
            });
            res.send(okMsg)
        });
    } else {
        res.send(errorMsg)
    }
});

app.listen(3000);
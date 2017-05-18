/**
 * Created by cw on 2017-05-18.
 */
'use strict';

var mysql = require('mysql');
var express = require('express');

const app = express();

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookstore'
});

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting to DB');
        return
    }
    console.log('Connection established')
});


const queryAllBook = 'SELECT book_name FROM book_mast';



app.get('/', function (req, res) {
    conn.query(queryAllBook, function (err, rows) {
        if (err) {
            console.log('Nem jau', err)
        } else {
            console.log('Data received from DB: \n');
            var html = '<ol>';
            rows.forEach(row => {
                html += '<li>' + row.book_name + '</li>';
            });
            html += '</ol>';
            res.send(html)
        }
    });
});


app.listen(3000);
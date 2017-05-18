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

const country = 'USA';
const city = 'Atlanta';
const query = 'SELECT aut_name FROM author WHERE country = ? AND home_city = ?;';



app.get('/', function (req, res) {
    conn.query(query,[country, city], function (err, rows) {
        if (err) {
            console.log('Nem jau', err)
        } else {
            console.log('Data received from DB: \n');
            rows.forEach(row => {
                console.log(row.aut_name);
                res.send(row.aut_name);
            })
        }
    });
});


app.listen(3000);
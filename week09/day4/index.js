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
const queryAllFullData = 'SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price ' +
    'FROM book_mast ' +
    'LEFT JOIN author ON book_mast.aut_id = author.aut_id ' +
    'LEFT JOIN category ON book_mast.cate_id = category.cate_id ' +
    'LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id ;';

app.get('/listbooks', function (req, res) {
    conn.query(queryAllBook, function (err, rows) {
        if (err) {
            console.log('Nem jau', err)
        } else {
            var html = '<ol>';
            rows.forEach(row => {
                html += '<li>' + row.book_name + '</li>';
            });
            html += '</ol>';
            res.send(html)
        }
    });
});

app.get('/allbooksfulldata', function (req, res) {
    var category = req.query.category;
    var publisher = req.query.publisher;
    var plt = req.query.plt;
    var pgt = req.query.pgt;
    var queryFilter = queryAllFullData;
    if (category) {
        queryFilter = queryFilter.slice(0, -1);
        queryFilter += "WHERE category.cate_descrip = '" + category + "';"
    }
    if (publisher) {
        queryFilter = queryFilter.slice(0, -1);
        queryFilter += "WHERE publisher.pub_name = '" + publisher + "';"
    } if (plt) {
        queryFilter = queryFilter.slice(0, -1);
        queryFilter += "WHERE book_mast.book_price < '" + plt + "';"
    } if (pgt) {
        queryFilter = queryFilter.slice(0, -1);
        queryFilter += "WHERE book_mast.book_price > '" + pgt + "';"
    }
    conn.query(queryFilter, function (err, rows) {
        if (err) {
            console.log('Nem jau', err)
        } else {
            var html = '<table> <tr><th>Book Title</th> <th>Authors name</th> <th>Category</th> <th>Publishers name</th> <th>Price</th></tr>';
            rows.forEach(row => {
                html += '<tr><td>' + row.book_name + '</td><td>' + row.aut_name + '</td><td>' + row.cate_descrip + '</td><td>' + row.pub_name +
                    '</td><td>' + row.book_price + '</td></tr>';
            });
            html += '</table>';
            res.send(html);
            queryFilter = queryAllFullData;
        }
    });
});


app.listen(3000);
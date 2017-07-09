'use strict';

const express = require('express');
const mysql = require('mysql');

const dbQuery = 'SELECT class FROM classes';

const app = express();
const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'greenfox'
});

app.get('/getClasses', (req, res) => {
  dbConnection.query(dbQuery, (error, rows) => {
    if (error) {
      console.log('Error in database query.')
    } else {
      console.log(rows);
      res.send(rows)
    }
  })
});

app.listen(3000, () => {
  console.log('Server is running')
});
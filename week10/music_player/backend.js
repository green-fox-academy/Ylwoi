/**
 * Created by cw on 2017-05-24.
 */
'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use('/assets', express.static('assets'));
app.use('/media', express.static('media'));

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'music_player'
});

connect.connect(function (err) {
    if (err) {
        console.log('Error connecting to DB');
    } else {
        console.log('Connection established');
    }
});

const queryAllPlaylist = 'SELECT * FROM playlists';
const queryAllTrack = 'SELECT * FROM tracks';
const deletePlaylist = 'DELETE FROM playlists WHERE id = ';

const queryMaker = function (res, query) {
    connect.query(query, function (err, rows) {
        if (err) {
            console.log('ERROR in playlist query', err)
        } else {
            res.send(rows)
        }
    })
};

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', function (req, res) {
    queryMaker(res, queryAllPlaylist);
});

app.get('/playlist-tracks', function (req, res) {
    queryMaker(res, queryAllTrack)
});

app.delete('/playlist-delete/:id', function (req, res) {
    let idToDelete = req.params.id;
    connect.query(deletePlaylist + idToDelete + ';');
    queryPlaylist(res);
});

app.listen(3000);
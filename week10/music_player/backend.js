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

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



app.get('/playlists', function (req, res) {
    res.send(playlists)
});

app.get('/playlist-tracks', function (req, res) {
    res.send(tracklist)
});

app.delete('/playlist-delete/:id', function (req, res) {
    let idToDelete = parseInt(req.params.id);
    for (let i = 0; i < playlists.length; i++) {
        if (playlists[i].id === idToDelete) {
            playlists.splice(i, 1);
        }
    }
    res.send(playlists)
});

app.listen(3000);
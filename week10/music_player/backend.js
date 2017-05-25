/**
 * Created by cw on 2017-05-24.
 */
'use strict';

var express = require('express');

const app = express();

app.use('/assets', express.static('assets'));
app.use('/media', express.static('media'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var playlists = [
    { "id": 1, "title": "Favorites", "system": 1},
    { "id": 2, "title": "Music for programming", "system": 0},
    { "id": 3, "title": "Driving", "system": 0},
    { "id": 5, "title": "Fox house", "system": 0},
];

var tracklist = [
    { "id": 21, "title": "Battlefield 1942 Theme", "artist": "Untitled artist", "duration": 248, "path": "media/bf1942.mp3" },
    { "id": 412, "title": "Purple", "artist": "Organoid", "duration": 208, "path": "media/purple.mp3" }
];

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
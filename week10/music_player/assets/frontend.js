/**
 * Created by cw on 2017-05-24.
 */
'use strict';

var xhr = new XMLHttpRequest();

let getPlaylists = function () {
    xhr.open('GET', 'http://localhost:3000/playlists', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(" PLAYLIST GUD");
            getTracks()
        }
    }
};

let getTracks = function () {
    xhr.open('GET', 'http://localhost:3000/playlist-tracks', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log('TRACKS GUD');
        }
    }
};

getPlaylists();
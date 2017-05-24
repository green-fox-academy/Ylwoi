/**
 * Created by cw on 2017-05-24.
 */
'use strict';

let xhr = new XMLHttpRequest();

let getPlaylists = function (callback) {
    xhr.open('GET', 'http://localhost:3000/playlists', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.response)
        }
    }
};

let getTracks = function (callback) {
    xhr.open('GET', 'http://localhost:3000/playlist-tracks', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.response)
        }
    }
};

let displayPlaylists = function (res) {
    let respPlaylist = JSON.parse(res);
    console.log(respPlaylist);

    let lengthPlaylists = respPlaylist.length;
    for (let i = 0; i < lengthPlaylists; i++) {
        var htmlPLaylists = document.querySelector('.playlists');

        let divPlaylist = document.createElement('div');
        divPlaylist.setAttribute('class', 'playlist new');

        let h2Playlist = document.createElement('h2');
        h2Playlist.setAttribute('class', 'list-name');
        h2Playlist.innerText = respPlaylist[i].title;
        divPlaylist.appendChild(h2Playlist);

        let anchPlaylist = document.createElement('a');
        anchPlaylist.setAttribute('class', 'delete-list');
        if (respPlaylist[i].system === 0) {
            anchPlaylist.innerText = 'X';
        }
        divPlaylist.appendChild(anchPlaylist);

        htmlPLaylists.appendChild(divPlaylist);
    }
};

getPlaylists(displayPlaylists);
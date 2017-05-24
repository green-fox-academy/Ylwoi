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
    getTracks(displayTracks);
};

let displayTracks = function (res) {
    let respTracks = JSON.parse(res);
    console.log(respTracks);

    let lengthTracks = respTracks.length;
    for (let i = 0; i < lengthTracks; i++) {
        var htmlTracks = document.querySelector('.tracks');

        let divTrack = document.createElement('div');
        divTrack.setAttribute('class', 'track');

        let numTrack = document.createElement('p');
        numTrack.setAttribute('class', 'track-num');
        numTrack.innerText = i+1;
        divTrack.appendChild(numTrack);

        let nameTrack = document.createElement('p');
        nameTrack.setAttribute('class', 'track-name');
        nameTrack.innerText = respTracks[i].artist;
        divTrack.appendChild(nameTrack);

        let timeTrack = document.createElement('p');
        timeTrack.setAttribute('class', 'track-length');
        let trackMin = Math.floor(respTracks[i].duration / 60);
        let trackSec = Math.floor(respTracks[i].duration % 60);
        if (trackSec < 10) {
            trackSec = '0' + trackSec
        }
        timeTrack.innerText = trackMin + ':' + trackSec;
        divTrack.appendChild(timeTrack);

        htmlTracks.appendChild(divTrack);
    }
};

getPlaylists(displayPlaylists);
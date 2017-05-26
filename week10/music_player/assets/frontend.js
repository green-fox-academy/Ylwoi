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

let deletePlaylist = function (id) {
    xhr.open('DELETE', 'http://localhost:3000/playlist-delete/' + id, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            displayPlaylists(xhr.response);
            console.log(xhr.response)
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

let postNewPlaylist = function (callback, data) {
    xhr.open('GET', 'http://localhost:3000/new-playlist/' + data, true);
    console.log(data);
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
    var htmlPLaylists = document.querySelector('.playlists');
    htmlPLaylists.innerHTML = '';

    for (let i = 0; i < lengthPlaylists; i++) {

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

            anchPlaylist.addEventListener('click', function () {
                deletePlaylist(respPlaylist[i].id)
            })
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
    var htmlTracks = document.querySelector('.tracks');
    var playingSong = document.querySelector('.song');
    var playingArtist = document.querySelector('.artist');
    htmlTracks.innerHTML = '';

    for (let i = 0; i < lengthTracks; i++) {

        let divTrack = document.createElement('div');
        divTrack.setAttribute('class', 'track');

        let numTrack = document.createElement('p');
        numTrack.setAttribute('class', 'track-num');
        numTrack.innerText = i+1;
        divTrack.appendChild(numTrack);

        let nameTrack = document.createElement('p');
        nameTrack.setAttribute('class', 'track-name');
        nameTrack.innerText = respTracks[i].artist + ' - ' + respTracks[i].title;
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

        divTrack.addEventListener('click', function () {
            let audio = document.querySelector('audio');
            audio.setAttribute('src', respTracks[i].path);
            audio.play();
            playingArtist.innerText = respTracks[i].artist;
            playingSong.innerText = respTracks[i].title;
        });

        htmlTracks.appendChild(divTrack);
    }
};

const controller = function () {
    this.init = function () {
        this.newPlaylistCreator()
    };
    this.newPlaylistCreator = function () {
        var newListButton = document.querySelector('.new-playlist');
        var playlistForm = document.querySelector('.playlist-form');
        var createButton = document.querySelector('.create');
        var input = document.querySelector('input');
        newListButton.addEventListener('click', function () {
            playlistForm.style.display = 'inline-block';
        });
        createButton.addEventListener('click', function () {
            var data = input.value;
            playlistForm.style.display = 'none';
            postNewPlaylist(displayPlaylists, data)
        })
    };
};

const cont = new controller;
cont.init();

getPlaylists(displayPlaylists);
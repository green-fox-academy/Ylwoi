/**
 * Created by cw on 2017-05-16.
 */
'use strict';

let main = document.querySelector('main');
let resp = {};
let xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://10.27.99.59:8080/posts', true);

let getPosts = function() {
    xhr.open('GET', 'http://localhost:3000/', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            displayPosts()
        }
    }
};

let displayPosts = function() {
    main.innerHTML = '';
    resp = JSON.parse(xhr.response);
    console.log(resp);
    let postLength = resp.posts.length;
    console.log(postLength);
    for (let i = 0; i < postLength; i++) {
        let ArtToAdd = document.createElement('article');
        main.appendChild(ArtToAdd);

        let ordinal = document.createElement('div');
        ordinal.className = 'ordinal';
        ordinal.innerText = i+1;
        ArtToAdd.appendChild(ordinal);

        let stat = document.createElement('div');
        stat.className = 'stat';
        ArtToAdd.appendChild(stat);

        let upvote = document.createElement('div');
        upvote.className = 'upvote';
        upvote.addEventListener('click', function(){
            upvote.style.backgroundImage = 'url(css/images/upvoted.png)';
            votes.innerText++;
            voteUp(i);
        });
        stat.appendChild(upvote);

        let votes = document.createElement('div');
        votes.className = 'votes';
        votes.innerText = resp.posts[i].score;
        stat.appendChild(votes);

        let downvote = document.createElement('div');
        downvote.className = 'downvote';
        downvote.addEventListener('click', function(){
            downvote.style.backgroundImage = 'url(css/images/downvoted.png)';
            votes.innerText--;
            voteDown(i);
        });
        stat.appendChild(downvote);

        let post = document.createElement('div');
        post.className = 'post';
        ArtToAdd.appendChild(post);

        let headline = document.createElement('a');
        headline.className = 'headline';
        headline.setAttribute('href', 'http://' + resp.posts[i].href);
        headline.innerText = resp.posts[i].title;
        post.appendChild(headline);

        let infos = document.createElement('div');
        infos.className = 'infos';
        let date = resp.posts[i].timestamp;
        let owner = resp.posts[i].owner;
        if (owner === null || typeof owner === 'undefined') {
            owner = 'anonymous';
        }
        infos.innerText = 'Submitted at ' + timeConverter(date) + ' by ' + owner;
        post.appendChild(infos);

        let actions = document.createElement('div');
        actions.className = 'actions';
        post.appendChild(actions);

        let modify = document.createElement('a');
        modify.innerText = 'modify ';
        actions.appendChild(modify);

        let remove = document.createElement('a');
        remove.innerText = 'remove';
        actions.appendChild(remove);
    }
};


let voteUp = function(num) {
    xhr.open('PUT', 'https://time-radish.glitch.me/posts/' + num + '/upvote', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            getPosts();
        }
    }
};

let voteDown = function(num) {
    xhr.open('PUT', 'https://time-radish.glitch.me/posts/' + num + '/downvote', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            getPosts();
        }
    }
};

let timeConverter = function(timestamp) {
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    return date + ' ' + month + ' ' + year + ' ' + hour + ':'
};

getPosts();
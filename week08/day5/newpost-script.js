/**
 * Created by cw on 2017-05-18.
 */
'use strict';

let postUrl = document.querySelector('.field_url');
let postTitle = document.querySelector('.field_title');
let checkbox = document.querySelector('.checkbox');
let button = document.querySelector('.action');


console.log(checkbox);

let createPost = function() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/post', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    let message = {
        "title": postTitle.value,
        "href": postUrl.value
    };
    xhr.send(JSON.stringify(message));
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            window.location.href = "main.html";
        }
    }
};

button.addEventListener('click', createPost);
/**
 * Created by cw on 2017-06-02.
 */
'use strict';

const xhr = new XMLHttpRequest();


let postIt = function (callback) {
    xhr.open('POST', 'http://localhost:3000/exam', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(JSON.stringify(getInputs()));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.response)
        }
    }
};

let getInputs = function () {
    let feedbackValue = document.querySelector('.feedback').value;
    let scaleValue = document.querySelector('.scale').value;
    let emailValue = document.querySelector('.email').value;
    let postData = {
        'feedback': feedbackValue,
        'scale': scaleValue,
        'email': emailValue
    };
    if (feedbackValue !== '' && scaleValue !== '' && emailValue !== '') {
        return postData
    }
};

let buttonEvent = function () {
    let sendButton = document.querySelector('button');
    sendButton.addEventListener('click', function () {
        postIt(showSecret)
    })
};

let showSecret = function (response) {
    //let secret = JSON.parse(response);
    document.write('This is the response' + response);
};

buttonEvent();
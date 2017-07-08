'use strict';

var xhr = new XMLHttpRequest();

function ajaxRequest(callback) {
  xhr.open('GET','https://equal-koala.glitch.me/games', true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.response))
    }
  }
}

function eventHandling(data) {
  let button = document.querySelector('button');
  let body = document.querySelector('body');
  let gamesData = data;

  button.addEventListener('click', () => {
    console.log(gamesData);
    let theList = document.createElement('ul');
    body.appendChild(theList);

    gamesData.forEach((game) => {
      let listItem = document.createElement('li');
      listItem.innerText = game.name;
      theList.appendChild(listItem)
    })
  })
}

ajaxRequest(eventHandling);
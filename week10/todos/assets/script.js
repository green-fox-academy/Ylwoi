/**
 * Created by cw on 2017-05-30.
 */
'use strict';

const xhr = new XMLHttpRequest();

let getTodo = function (callback) {
    xhr.open('GET', 'http://localhost:3000/todos', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.response)
        }
    }
};



let displayAllTodo = function (res) {
    let respAllTodo = JSON.parse(res);

    let lengthTodos = respAllTodo.length;
    let htmlTodos = document.querySelector('.todos');
    htmlTodos.innerHTML = '';

    for (let i = 0; i < lengthTodos; i++) {

        let divTodo = document.createElement('div');
        divTodo.setAttribute('class', 'Todo');

        let aTodoName = document.createElement('a');
        aTodoName.setAttribute('class', 'todo-name');
        aTodoName.innerText = respAllTodo[i].text;
        divTodo.appendChild(aTodoName);

        let divButtons = document.createElement('div');
        divButtons.setAttribute('class', 'todo-buttons');

        let imgDelete = document.createElement('img');
        imgDelete.setAttribute('class', 'delete');
        imgDelete.setAttribute('src', 'img/delete.svg');
        divButtons.appendChild(imgDelete);

        let imgCheck = document.createElement('img');
        imgCheck.setAttribute('class', 'check');
        if (respAllTodo[i].completed) {
            imgCheck.setAttribute('src', 'img/checked.svg')
        } else {
            imgCheck.setAttribute('src', 'img/unchecked.svg')
        }
        divButtons.appendChild(imgCheck);

        divTodo.appendChild(divButtons);
        htmlTodos.appendChild(divTodo);
    }
};


getTodo(displayAllTodo);
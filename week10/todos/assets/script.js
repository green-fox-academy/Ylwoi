/**
 * Created by cw on 2017-05-30.
 */
'use strict';

const xhr = new XMLHttpRequest();

let getTodo = function (callback) {
    xhr.open('GET', 'http://localhost:3000/todos', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.response)
        }
    }
};

let deleteTodo = function (id) {
    xhr.open('DELETE', 'http://localhost:3000/delete/' + id, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            displayAllTodo(xhr.response)
        }
    }
};

let newTodo = function (todoText) {
    xhr.open('GET', 'http://localhost:3000/addTodo/' + todoText, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            displayAllTodo(xhr.response)
        }
    }
};

let completeTodo = function (id, completed) {
    xhr.open('PUT', 'http://localhost:3000/complete/' + id + '/' + completed, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            displayAllTodo(xhr.response)
        }
    }
};

let displayAllTodo = function (res) {
    let respAllTodo = JSON.parse(res);

    let lengthTodos = respAllTodo.length;
    let htmlTodos = document.querySelector('.allTodo');
    htmlTodos.innerHTML = '';

    for (let i = 0; i < lengthTodos; i++) {

        let divTodo = document.createElement('div');
        divTodo.setAttribute('class', 'todo');

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
        imgDelete.addEventListener('click', function () {
            deleteTodo(respAllTodo[i].id)
        });

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

const controller = function () {
    this.init = function () {
        this.addTodo()
    };

    this.addTodo = function () {
        let input = document.querySelector('input');
        let button = document.querySelector('button');

        button.addEventListener('click', function () {
            let data = input.value;
            if (data != '') {
                newTodo(data)
            }
            input.value = '';
        })
    }
};

const cont = new controller;
cont.init();


getTodo(displayAllTodo);
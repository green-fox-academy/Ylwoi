/**
 * Created by cw on 2017-05-30.
 */
'use strict';

class Ajax {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    getTodo (callback) {
        this.xhr.open('GET', 'http://localhost:3000/todos', true);
        this.xhr.send();
        this.xhr.onreadystatechange = function () {
            if (this.xhr.readyState === 4) {
                callback(this.xhr.response)
            }
        }
        }

}

class Display {
    displayAllTodo (res) {
        this.respAllTodo = JSON.parse(res);

        this.lengthTodos = this.respAllTodo.length;
        this.htmlTodos = document.querySelector('.todos');
        this.htmlTodos.innerHTML = '';

        for (let i = 0; i < this.lengthTodos; i++) {

            this.divTodo = document.createElement('div');
            this.divTodo.setAttribute('class', 'Todo');

            this.aTodoName = document.createElement('a');
            this.aTodoName.setAttribute('class', 'todo-name');
            this.aTodoName.innerText = this.respAllTodo[i].text;
            this.divTodo.appendChild(this.aTodoName);

            this.divButtons = document.createElement('div');
            this.divButtons.setAttribute('class', 'todo-buttons');

            this.imgDelete = document.createElement('img');
            this.imgDelete.setAttribute('class', 'delete');
            this.imgDelete.setAttribute('src', 'img/delete.svg');
            this.divButtons.appendChild(this.imgDelete);

            this.imgCheck = document.createElement('img');
            this.imgCheck.setAttribute('class', 'check');
            if (this.respAllTodo[i].completed) {
                this.imgCheck.setAttribute('src', 'img/checked.svg')
            } else {
                this.imgCheck.setAttribute('src', 'img/unchecked.svg')
            }
            this.divButtons.appendChild(this.imgCheck);

            this.divTodo.appendChild(this.divButtons);
            this.htmlTodos.appendChild(this.divTodo);
        }
    }
}

const ajax = new Ajax();
const disp = new Display();

ajax.getTodo(disp.displayAllTodo);
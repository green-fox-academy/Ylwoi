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
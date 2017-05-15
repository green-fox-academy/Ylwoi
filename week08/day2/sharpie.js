/**
 * Created by cw on 2017-05-09.
 */
'use strict';

function sharpie (color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
    this.use = function () {
        this.inkAmount -= this.width;
    }
}

module.exports = sharpie;
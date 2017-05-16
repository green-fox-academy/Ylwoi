/**
 * Created by cw on 2017-05-09.
 */
'use strict';

function sharpie (color, width) {
    if (typeof color !== 'string') {
        throw new Error('Invalid color parameter')
    } else if (typeof width !== 'number') {
        throw new Error('Invalid width parameter')
    }
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
    this.use = function () {
        this.inkAmount -= this.width;
    }
}

module.exports = sharpie;
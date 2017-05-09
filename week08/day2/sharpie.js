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

var shar1 = new sharpie('blue', 20);
console.log(shar1.inkAmount);
shar1.use();
console.log(shar1.inkAmount);

var shar2 = new sharpie('green', 30);
console.log(shar2.inkAmount);
shar2.use();
console.log(shar2.inkAmount);
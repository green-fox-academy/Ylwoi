/**
 * Created by cw on 2017-05-23.
 */
'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

class Rectangles {
    constructor (sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea () {
        return this.sideA * this.sideB
    }

    getCircumference () {
        return 2 * (this.sideA * this.sideB)
    }
}

var rect1 = new Rectangles(10, 10);

console.log(rect1.getArea());
console.log(rect1.getCircumference());
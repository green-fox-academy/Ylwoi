/**
 * Created by cw on 2017-05-23.
 */
'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animals (animalSays) {
    this.animalSays = animalSays;
}

Animals.prototype.say = function () {
    console.log(this.animalSays)
};

var dog = new Animals('Woof');
var cat = new Animals('Meow');

dog.say();
cat.say();
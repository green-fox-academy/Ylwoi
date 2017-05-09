/**
 * Created by cw on 2017-05-09.
 */
function Animal(name) {
    this.name = name;
    this.hunger = 50;
    this.thirst = 50;
    this.eat = function () {
        this.hunger--;
    };
    this.drink = function () {
        this.thirst--;
    };
    this.play = function () {
        this.hunger++;
        this.thirst++;
    };
}

function Farm(slots) {
    this.freePlace = slots;
    this.animals = [];
    this.breed = function (name) {
        if (this.animals.length < this.freePlace) {
            var a = new Animal(name);
            this.animals.push(a);
        }
    }
}

var farm1 = new Farm(2);
farm1.breed('tiger');
farm1.breed('lion');
console.log(farm1.animals);
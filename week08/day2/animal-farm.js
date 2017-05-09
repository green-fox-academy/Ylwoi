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
        } else {
            console.log('The farm is full.');
        }
    };
    this.slaughter = function () {
        var least = this.animals[0];
        this.animals.forEach(function (e) {
            if (e.hunger < least.hunger) {
                least = e;
            }
        });
        this.animals.splice(this.animals.indexOf(least), 1);
    }
}

var farm1 = new Farm(3);
farm1.breed('tiger');
farm1.breed('lion');
farm1.breed('dragon');
console.log(farm1.animals);

farm1.animals[0].play();
farm1.animals[1].eat();
console.log(farm1.animals);

farm1.slaughter();
console.log(farm1.animals);
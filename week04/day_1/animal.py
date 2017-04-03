__author__ = 'ylwoi'

class Animal:
    def __init__(self):
        self.hunger = 50
        self.thirst = 50

    def eat(self):
        self.hunger -= 1
    def drink(self):
        self.thirst -= 1
    def play(self):
        self.hunger += 1
        self.thirst += 1

lion = Animal()
tiger = Animal()

lion.play()
lion.play()
tiger.play()

lion.eat()
tiger.drink()

print(lion.thirst, lion.hunger)
print(tiger.thirst, tiger.hunger)
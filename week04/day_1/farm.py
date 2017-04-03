__author__ = 'ylwoi'

class Animal:
    def __init__(self, name):
        self.hunger = 50
        self.thirst = 50
        self.name = name
        for i in Farm.animal_list:
            if i == []:
                i += [self.name, self.hunger, self.thirst]
                break

    def eat(self):
        self.hunger -= 10
        for i in Farm.animal_list:
            if i[0] == self.name:
                i[1] -= 10
    def drink(self):
        self.thirst -= 10
        for i in Farm.animal_list:
            if i[0] == self.name:
                i[2] -= 10
    def play(self):
        self.hunger += 10
        self.thirst += 10
        for i in Farm.animal_list:
            if i[0] == self.name:
                i[1] += 10
                i[2] += 10

class Farm:
    animal_list = [[], [], []]
    def breed(self):
        new_animal = Animal('Busi')
        for i in Farm.animal_list:
            if i == []:
                i += new_animal
                break

    def slaughter(self):
        Farm.animal_list.sort(key=lambda x:x[1])
        Farm.animal_list[0] = []



tanya = Farm()
sinbad = Animal('Lion')
vuk = Animal('Fox')

print(Farm.animal_list)

tanya.breed()
tanya.breed()
print(Farm.animal_list)

vuk.eat()
vuk.eat()
tanya.slaughter()

print(Farm.animal_list)

__author__ = 'ylwoi'

class Station:
    gas_amount = 1000
    def refill(self, car):
        self.gas_amount -= car.capacity
        car.gas_amount += car.capacity


class Car:
    def __init__(self, gas_amount=0, capacity=100):
        self.gas_amount = gas_amount
        self.capacity = capacity

mol = Station()
trabant = Car()

print(trabant.gas_amount, trabant.capacity, mol.gas_amount)

mol.refill(trabant)

print(trabant.gas_amount, trabant.capacity, mol.gas_amount)
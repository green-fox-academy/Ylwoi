__author__ = 'ylwoi'

class Sharpie:
    ink_amount = 100.0
    def __init__(self, color, width):
        self.color = color
        self.width = width
    def use(self):
        self.ink_amount -= 10

sharp1 = Sharpie('blue', 120.5)
sharp2 = Sharpie('yellow', 99.5)

print(sharp1.ink_amount, sharp2.ink_amount)
print(sharp1.color, sharp2.width)

sharp1.use()

print(sharp1.ink_amount, sharp2.ink_amount)
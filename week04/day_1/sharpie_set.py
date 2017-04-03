__author__ = 'ylwoi'

class Sharpie:
    def __init__(self, color, width, ink_amount):
        self.color = color
        self.width = width
        self.ink_amount = ink_amount
        SharpieSet.set.append([self.color, self.ink_amount])
    def use(self):
        self.ink_amount -= 40
        for i in SharpieSet.set:
            if self.color == i[0]:
                i[1] -= 40

class SharpieSet:
    set = []
    def count_usable(self):
        count = 0
        for i in SharpieSet.set:
            if i[1] > 0:
                count += 1
        return count

    def remove_trash(self):
        list2 = []
        for i in SharpieSet.set:
            if i[1] > 0:
                list2.append(i)
        SharpieSet.set = list2

ss = SharpieSet()

sharp1 = Sharpie('blue', 120.5, 90)
sharp2 = Sharpie('yellow', 99.5, 40)
sharp3 = Sharpie('black', 200, 0)
sharp4 = Sharpie('white', 150, 80)
sharp5 = Sharpie('green', 75.5, 0)

print(SharpieSet.set)
print(ss.count_usable())

sharp1.use()
sharp2.use()

print(ss.count_usable())

print(SharpieSet.set)

ss.remove_trash()
print(SharpieSet.set)
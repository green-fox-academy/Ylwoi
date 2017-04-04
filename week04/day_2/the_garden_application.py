__author__ = 'ylwoi'


class Garden():
    flowers = []
    trees = []

    def waters(self, amount):
        self.amount = amount
        water_amount = amount / self.count()
        for i in self.flowers:
            if i[1] < 5:
                i[1] += water_amount * 0.75
        for i in self.trees:
            if i[1] < 10:
                i[1] += water_amount * 0.4


    def count(self):
        count = 0
        for i in self.flowers:
            if i[1] < 5:
                count += 1
        for i in self.trees:
            if i[1] < 10:
                count += 1
        return count


class Flower(Garden):
    def __init__(self, color, water_amount=0):
        self.color = color
        self.water_amount = 0
        self.flowers.append([self.color, self.water_amount])
        print('The', self.color, 'Flower needs water.')


class Tree(Garden):
    def __init__(self, color, water_amount=0):
        self.color = color
        self.water_amount = 0
        self.trees.append([self.color, self.water_amount])
        print('The', self.color, 'Tree needs water.')

garden = Garden()
flower1 = Flower('blue')
flower2 = Flower('yellow')
tree1 = Tree('purple')
tree2 = Tree('orange')

garden.waters(40)
print(garden.trees)
print(garden.flowers)

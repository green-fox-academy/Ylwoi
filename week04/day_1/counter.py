__author__ = 'ylwoi'

class Counter:
    def __init__(self, value=0):
        self.value = value
        self.cache = value

    def add(self, number=1):
        if number == 1:
            self.value += 1
        else:
            self.value += number

    def get(self):
        return self.value

    def reset(self):
        self.value = self.cache

num1 = Counter(10)
num2 = Counter(10)

num1.add()
num2.add(10)

num2.add(100)
num2.reset()

print(num1.get(), num2.get())

__author__ = 'ylwoi'


class Apples:
    def get_apple(self):
        return 'apple'


class Sum:
    def sum(self, list=[]):
        self.numbers = list
        sum_of_nums = 0
        for i in self.numbers:
            sum_of_nums += i
        return sum_of_nums


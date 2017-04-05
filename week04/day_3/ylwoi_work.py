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


class Anagram:
    def anagram(self, word1, word2):
        self.word1 = word1
        self.word2 = word2
        list_word1 = list(sorted(self.word1))
        list_word2 = list(sorted(self.word2))
        if len(list_word1) == len(list_word2):
            for i in range(len(list_word1)):
                if list_word1[i] != list_word2[i]:
                    return False
            return True
        else:
            return False


class CountLetters:
    def count_letters(self, word):
        self.word = word
        list_word = list(self.word)
        dictionary = {}
        for i in list_word:
            if i in dictionary:
                dictionary[i] += 1
            else:
                dictionary[i] = 1
        return dictionary


class Fibonacci:
    def fibonacci(self, n):
        self.n = n
        if self.n < 2:
            return self.n
        else:
            return self.fibonacci(n-1) + self.fibonacci(n-2)


class Sharpie:
    def __init__(self, color, width):
        self.color = color
        self.width = width
        self.ink_amount = 100
    def use(self):
        self.ink_amount -= 10
        return self.ink_amount
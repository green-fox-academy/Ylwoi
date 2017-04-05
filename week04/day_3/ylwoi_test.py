__author__ = 'ylwoi'

import unittest
from ylwoi_work import Apples, Sum, Anagram, CountLetters, Fibonacci, Sharpie


class TestApplesMethods(unittest.TestCase):
    def test_get_method(self):
        apple = Apples()
        self.assertEqual(apple.get_apple(), 'apple')


class TestSum(unittest.TestCase):
    def test_sum_method_one_number(self):
        sum_nums = Sum()
        self.assertEqual(sum_nums.sum([3]), 3)
    def test_sum_method_more_number(self):
        sum_nums = Sum()
        self.assertEqual(sum_nums.sum([3, 5, 1]), 9)
    def test_sum_method_without_number(self):
        sum_nums = Sum()
        self.assertEqual(sum_nums.sum([]), 0)


class TestAnagram(unittest.TestCase):
    def test_anagram_if_anagrams(self):
        anagram = Anagram()
        self.assertTrue(anagram.anagram('rat', 'art'))
    def test_anagram_if_not_anagrams(self):
        anagram = Anagram()
        self.assertFalse(anagram.anagram('balm', 'milb'))


class TestCountLetters(unittest.TestCase):
    def test_count_letters_one(self):
        letter_counter = CountLetters()
        self.assertEqual(letter_counter.count_letters('toll'), {'t': 1, 'o': 1, 'l': 2})
    def test_count_letters_two(self):
        letter_counter = CountLetters()
        self.assertEqual(letter_counter.count_letters('rrrr'), {'r': 4})


class TestFibonacci(unittest.TestCase):
    def test_fibonacci_method_zero(self):
        fibo = Fibonacci()
        self.assertEqual(fibo.fibonacci(0), 0)

    def test_fibonacci_method_one(self):
        fibo = Fibonacci()
        self.assertEqual(fibo.fibonacci(1), 1)

    def test_fibonacci_method_number(self):
        fibo = Fibonacci()
        self.assertEqual(fibo.fibonacci(6), 8)


class TestSharpie(unittest.TestCase):
    def test_init(self):
        sharp = Sharpie('black', 150)
        self.assertEqual(sharp.ink_amount, 100)
    def test_use(self):
        sharp = Sharpie('black', 150)
        self.assertEqual(sharp.use(), 90)


if __name__ == '__main__':
    unittest.main()
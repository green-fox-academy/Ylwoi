__author__ = 'ylwoi'

import unittest
from ylwoi_work import Apples, Sum, Anagram


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



if __name__ == '__main__':
    unittest.main()
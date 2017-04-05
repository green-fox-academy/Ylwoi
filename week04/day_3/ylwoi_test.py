__author__ = 'ylwoi'

import unittest
from ylwoi_work import Apples


class TestApplesMethods(unittest.TestCase):
    def test_get_method(self):
        apple = Apples()
        self.assertEqual(apple.get_apple(), 'apple')





if __name__ == '__main__':
    unittest.main()
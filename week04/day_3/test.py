import unittest
import extend

class TestExtend(unittest.TestCase):

    def test_add_0_and_4_is_4(self):
        self.assertEqual(extend.add(0, 4), 4)

    def test_add_4_and_1_is_5(self):
        self.assertEqual(extend.add(4, 1), 5)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(7, 4, 3), 7)

    def test_max_of_three_third(self):
        self.assertEqual(extend.max_of_three(6, 4, 8), 8)

    def test_median_four(self):
        self.assertEqual(extend.median([3,5,5,7]), 5)

    def test_median_five(self):
        self.assertEqual(extend.median([1,2,3,4,5]), 3)

    def test_is_vovel_a(self):
        self.assertTrue(extend.is_vovel('a'))

    def test_is_vovel_u(self):
        self.assertTrue(extend.is_vovel('u'))

    def test_translate_bemutatkozik(self):
        self.assertEqual(extend.translate('bemutatkozik'), 'bevemuvutavatkovozivik')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kolbice'), 'kovolbiviceve')

if __name__ == '__main__':
    unittest.main()
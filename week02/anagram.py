__author__ = 'ylwoi'

def anagram(word1, word2):
    word1_charlist = []
    word2_charlist = []
    for i in word1:
        word1_charlist += i
    for i in word2:
        word2_charlist += i
    word1_charlist = sorted(word1_charlist)
    word2_charlist = sorted(word2_charlist)
    return (word1_charlist == word2_charlist)

word_one, word_two = map(str, input("Enter two words: ").split())
print(anagram(word_one, word_two))
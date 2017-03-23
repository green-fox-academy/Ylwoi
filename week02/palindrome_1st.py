__author__ = 'ylwoi'

def word_reverse(word):
    word = word[::-1]
    return word


def is_palindrome(word):
    if word == word_reverse(word):
        return True
    else:
        return False

def create_palindrome(word):
    if is_palindrome(word) == True:
        print("It is already a palindrome")
    else:
        word += word_reverse(word)
    return word

output = create_palindrome("cica")
print(output)
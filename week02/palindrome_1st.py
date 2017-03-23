__author__ = 'ylwoi'

print("**********************\n"
      "The Palindrome Creator\n"
      "**********************\n")

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
        print("It is already a palindrome", end="")
        return ""
    else:
        word += word_reverse(word)
    return word


while True:
    user_word = input("Enter a word: ")
    palindrome_word = create_palindrome(user_word)
    print(palindrome_word)
    while True:
        question = input("Do you want to create another palindrome? ")
        if question.lower() == 'no':
            print("Bye!")
            quit()
        if question.lower() == 'yes':
            break
        else:
            print("I speak only English so please enter 'yes' or 'no' :)")
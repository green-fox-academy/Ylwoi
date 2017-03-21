__author__ = 'ylwoi'

import random

num = random.randrange(1,10)
while True:
    guess = int(input("Take a guess: "))
    if guess == num:
        print("You found the number", num)
        break
    elif guess > num:
        print("The stored number is lower")
    elif guess < num:
        print("The stored number is higher")
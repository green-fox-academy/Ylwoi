__author__ = 'ylwoi'
import random

num_range = int(input("Enter a number to give a range for number guessing: "))
lives = 5
the_number = random.randrange(0, num_range)

while lives >= 0:
    guess_num = int(input("Make a guess: "))
    if guess_num == the_number:
        print("Wow, you guessed it!")
        break
    elif guess_num > the_number:
        lives -= 1
        print("Too high. You have", lives, "lives left.")
    elif guess_num < the_number:
        lives -= 1
        print("Too low. You have", lives, "lives left.")
    if lives == 0:
        print("Game over, the number was:", the_number)
        break
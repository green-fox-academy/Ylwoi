__author__ = 'ylwoi'

# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def number_adder(number):
    if number == 1:
        return 1
    else:
        return number + number_adder(number-1)

print(number_adder(5))
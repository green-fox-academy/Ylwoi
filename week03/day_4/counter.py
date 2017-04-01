__author__ = 'ylwoi'

# Write a recursive function that takes one parameter: n and counts down from n.

def counter(number):
    if number == 0:
        return number
    else:
        return number, counter(number-1)

print(counter(10))
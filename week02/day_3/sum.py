__author__ = 'ylwoi'

# - Write a function called `sum` that sum all the numbers
#   until the given parameter

def sum(x):
    ossz = 0
    for i in range(1, x+1):
        ossz += i
    return ossz

print(sum(5))
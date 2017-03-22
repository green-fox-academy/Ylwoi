__author__ = 'ylwoi'

# - Create a function called `factorio`
#   that returns it's input's factorial

def factorio(x):
    ossz = 1
    for i in range(1, x+1):
        ossz *= i
    return ossz

print(factorio(5))
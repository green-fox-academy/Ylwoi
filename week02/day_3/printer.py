__author__ = 'ylwoi'

# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)

def printer(*args):
    for i in range(0, len(args)):
        print(args[i], end=" ")

printer(input("Enter words: "))
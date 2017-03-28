__author__ = 'ylwoi'

# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

def divider(number):
    try:
        result = 10 / number
        print(result)
    except ArithmeticError:
        print("fail")

divider(0)
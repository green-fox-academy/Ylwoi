__author__ = 'ylwoi'

# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

x = int(input("Enter a number to set the piramid's size: "))
for i in range(x):
    print((x-i) * " " + (i * "*") * 2 + "*")
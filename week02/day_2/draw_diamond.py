__author__ = 'ylwoi'

# Write a program that reads a number from the standard input, then draws a
# diamond like this:
#
#
#    *
#   ***
#  *****
# *******
#  *****
#   ***
#    *
#
# The diamond should have as many lines as the number was

x = int(input("Enter a number to set the diamond's size: "))
for i in range(x):
    print((x-i) * " " + (i * "*") * 2 + "*")

for j in range(x, -1, -1):
    print((x -j) * " " + (j * "*") * 2 + "*")

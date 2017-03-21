__author__ = 'ylwoi'
# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was

x = int(input("Enter a number to to set triangle size:"))
for i in range(1, x+1):
    print("*"*i)
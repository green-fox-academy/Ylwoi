__author__ = 'ylwoi'

# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %%  %
# % % %
# %  %%
# %   %
# %%%%%
#
# The square should have as many lines as the number was

size = int(input("Enter a number to set the diagonal size: "))

for i in range(1, size+1):
    if i == 1 or i == size:
        print(size * "%")
    else:
        print("%" + (i - 2) * " " + "%" + (size - 1 - i) * " " + "%")
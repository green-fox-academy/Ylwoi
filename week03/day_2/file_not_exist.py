__author__ = 'ylwoi'

# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.

def line_counter(filename):
    try:
        my_file = open(filename, mode="r")
        list = my_file.readlines()
        count = 0
        for line in list:
            count += 1
        print(count)
    except FileNotFoundError:
        print("zero")

line_counter("empty3.txt")
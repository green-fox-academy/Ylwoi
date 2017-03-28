__author__ = "ylwoi"

def crypto(filename):
    my_file = open(filename, mode="r")
    for line in my_file:
        print(line[::-1])

crypto("reversed-lines.txt")
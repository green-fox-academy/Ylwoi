__author__ = "ylwoi"

def crypto(filename):
    my_file = open(filename, mode="r")
    for line in my_file:
        print(line[::-1])
    my_file.close()

crypto("reversed-lines.txt")
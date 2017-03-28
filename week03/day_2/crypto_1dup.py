__author__ = 'ylwoi'

def decrypt(filename):
    my_file = open(filename, mode="r")
    for line in my_file:
        print(line[::2])

decrypt("duplicated-chars.txt")
__author__ = 'ylwoi'

def crypto(filename):
    my_file = open(filename, mode="r")
    list = my_file.readlines()
    for line in list[::-1]:
        print(line)
    my_file.close()

crypto('reversed-order.txt')

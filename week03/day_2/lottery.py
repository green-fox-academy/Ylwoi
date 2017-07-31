__author__ = 'ylwoi'

import collections

def five_most_frequent(filename):
    my_file = open(filename, mode="r")

    lottery_list = my_file.readlines()
    splitted_list = []
    lott_dict = {}
    numbers = []

    for i in range(1, 91):
        lott_dict[i] = 0

    for line in lottery_list:
        splitted_list.append(line.split(';'))
    for element in splitted_list:
        for i in element[len(element)-5:len(element)]:
            numbers.append(int(i))

    for num in numbers:
        lott_dict[num] += 1

    top_five = sorted(lott_dict.values(), reverse=True)[:5]

    for i in top_five[::2]:
            for key, value in lott_dict.items():
                if i == value:
                    print("The number", key, "comes out", value, "times")

    print(sorted(lott_dict.items(), key=lambda x: x[1])[-5::])

    my_file.close()

five_most_frequent("otos.csv")
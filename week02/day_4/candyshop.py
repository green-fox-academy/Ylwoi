__author__ = 'ylwoi'

candy_list = ["Cupcake", 2, "Brownie", False]

for i in range(len(candy_list)):
    if candy_list[i] == 2:
        candy_list[i] = "Croissant"
    elif candy_list[i] == False:
        candy_list[i] = "Ice cream"

print(candy_list)

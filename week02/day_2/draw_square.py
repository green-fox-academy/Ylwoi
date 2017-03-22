__author__ = 'ylwoi'
size = int(input("Enter a number to set the square size: "))
for i in range(0, size+1):
    if i == 0 or i == size:
        print(size * "%")
    else:
        print("%" + (size-2) * " " + "%")
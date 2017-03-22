__author__ = 'ylwoi'
white = "□"
black = "■"

def tablerow(i):
    if i % 2 == 0:
        for i in range(0, 8):
            if i % 2 == 0:
                print(white, end="")
            elif i == 7:
                print("\n")
            else:
                print(black, end="")
    else:
        for i in range(0, 8):
            if i % 2 == 0:
                print(black, end="")
            elif i == 7:
                print("\n")
            else:
                print(white, end="")

for i in range(0, 8):
    tablerow(i)

__author__ = 'cw'

while True:
    imax = 0
    hmax = 0
    for i in range(8):
        mountain_h = int(input())
        if mountain_h > hmax:
            hmax = mountain_h
            imax = i
    print(imax)
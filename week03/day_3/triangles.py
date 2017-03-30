__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/triangles/r5.png]

start = 0
finish = 300
interval = 20
for lines in range(interval):
    for i in range(start, finish, interval):
        canvas.create_polygon(i, finish-10, i+10, finish-20, i + 20, finish-10, outline='black', fill='white')
    start += 10
    finish -= 10

root.mainloop()

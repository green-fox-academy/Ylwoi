__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# fill the canvas with a checkerboard pattern.
x = 0
y = 0
for j in range(10):
    x = 0
    if j % 2 == 0:
        for i in range(10):
            if i % 2 == 0:
                square = canvas.create_rectangle(x, y, x+30, y+30, fill='black')
                x += 30
            else:
                square = canvas.create_rectangle(x, y, x+30, y+30, fill='white')
                x += 30
    else:
       for i in range(10):
            if i % 2 == 0:
                square = canvas.create_rectangle(x, y, x+30, y+30, fill='white')
                x += 30
            else:
                square = canvas.create_rectangle(x, y, x+30, y+30, fill='black')
                x += 30
    y += 30

root.mainloop()
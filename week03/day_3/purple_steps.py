__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps/r3.png]
x = 10
y = 10
for i in range(20):
    square = canvas.create_rectangle(x, y, x+10, y+10, fill='purple')
    x += 10
    y += 10

root.mainloop()

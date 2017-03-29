__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps-3d/r4.png]

x = 20
y = 20
for i in range(6):
    square = canvas.create_rectangle(x, y, x*1.5, y*1.5, fill='purple')
    x += 0.5*x
    y += 0.5*y

root.mainloop()

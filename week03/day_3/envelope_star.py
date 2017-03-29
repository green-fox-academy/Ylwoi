__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/envelope-star/r2.png]

for i in range(0, 150, 10):
    lines1 = canvas.create_line(150, i, i+150, 150, fill='blue')
for i in range(150, 0, -10):
    lines1 = canvas.create_line(150, i, 150-i, 150, fill='red')


for i in range(150, 300, 10):
    lines1 = canvas.create_line(i-150, 150, 150, i, fill='orange')
for i in range(300, 150, -10):
    lines1 = canvas.create_line(i, 150, 150, 450-i, fill='green')
root.mainloop()

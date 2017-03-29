__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/line-play/r1.png]

for i in range(0, 300, 20):
    lines1 = canvas.create_line(i, 0, 300, i, fill='purple')
    lines2 = canvas.create_line(0, i, i, 300, fill='green')

root.mainloop()

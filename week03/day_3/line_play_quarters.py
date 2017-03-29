__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/line-play/r1.png]

for i in range(0, 150, 10):
    lines1 = canvas.create_line(i, 0, 150, i, fill='purple')
    lines2 = canvas.create_line(0, i, i, 150, fill='green')

    lines3 = canvas.create_line(i+150, 0, 300, i, fill='red')
    lines4 = canvas.create_line(150, i, i+150, 150, fill='blue')


for i in range(150, 300, 10):
    lines1 = canvas.create_line(i, 150, 300, i, fill='purple')
    lines2 = canvas.create_line(150, i, i, 300, fill='green')

    lines1 = canvas.create_line(i-150, 150, 150, i, fill='orange')
    lines2 = canvas.create_line(0, i, i-150, 300, fill='black')


root.mainloop()
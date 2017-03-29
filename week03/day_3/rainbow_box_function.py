__author__ = 'ylwoi'

from tkinter import *
import random

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

box_size = 150
color = ["red", "orange", "yellow", "green", "blue", "violet"]
n = int((150-box_size/2)/8)

def center_box(size, color):
    square = canvas.create_rectangle(150-size/2, 150-size/2, 150+size/2, 150+size/2, fill=color)

for i in range(300, box_size, -n):
    box = canvas.create_rectangle(300-i, 300-i, i, i, fill=random.choice(color))

center_box(box_size, 'red')

root.mainloop()

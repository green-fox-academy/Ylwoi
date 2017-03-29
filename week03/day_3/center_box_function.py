__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

def center_box(size, color):
    square = canvas.create_rectangle(150-size/2, 150-size/2, 150+size/2, 150+size/2, fill=color)

center_box(200, 'red')
center_box(100, 'yellow')
center_box(50, 'blue')

root.mainloop()

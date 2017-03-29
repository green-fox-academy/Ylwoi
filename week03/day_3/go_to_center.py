__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

def draw_center(x, y, color):
    line = canvas.create_line(x, y, 150, 150, fill=color)

draw_center(10, 20, 'red')
draw_center(30, 80, 'green')
draw_center(120, 40, 'blue')

root.mainloop()

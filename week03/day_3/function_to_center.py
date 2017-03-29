__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

def to_center(x, y):
    line = canvas.create_line(x, y, 150, 150, fill='red')
    for i in range(0, 301, 15):
        lines_left = canvas.create_line(0, i, 150, 150, fill='blue')
        lines_bottom = canvas.create_line(i, 300, 150, 150, fill='blue')
        lines_right = canvas.create_line(300, i, 150, 150, fill='blue')
        lines_top = canvas.create_line(i, 0, 150, 150, fill='blue')
to_center(100, 30)
root.mainloop()

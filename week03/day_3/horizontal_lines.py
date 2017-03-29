__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

def draw_horizontal(x, y, color):
    line = canvas.create_line(x, y, x+50, y, fill=color)

draw_horizontal(0, 10, 'red')
draw_horizontal(30, 40, 'green')
draw_horizontal(60, 70, 'blue')

root.mainloop()

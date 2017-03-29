__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

def draw_square(x, y, color):
    square = canvas.create_rectangle(x, y, x+50, y+50, fill=color)

draw_square(30, 40, 'red')
draw_square(70, 10, 'green')
draw_square(10, 90, 'blue')

root.mainloop()

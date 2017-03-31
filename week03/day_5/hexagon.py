__author__ = 'ylwoi'

from tkinter import *
import time

root = Tk()
canvas = Canvas(root, width='600', height='600')
canvas.pack()

#canvas.create_polygon( outline='black', width='1')
fv = (3**0.5)/2

def draw_hexagon(x, y, size):
    canvas.create_polygon(x+size/2, y-size*fv, x-size/2, y-size*fv, x-size, y, x-size/2, y+size*fv, x+size/2, y+size*fv, x+size, y, outline='black', width='1', fill='')

def recursive(x, y, size):
    draw_hexagon(x, y, size)
    if size > 5:
        recursive(x-size*fv/1.3, y, size/3)
        recursive(x-size*fv/2.6, y-size*0.579, size/3)
        recursive(x+size*fv/2.6, y-size*0.579, size/3)
        recursive(x+size*fv/1.3, y, size/3)
        recursive(x-size*fv/2.6, y+size*0.579, size/3)
        recursive(x+size*fv/2.6, y+size*0.579, size/3)


recursive(300, 300, 300)

root.mainloop()

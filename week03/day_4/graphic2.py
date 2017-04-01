__author__ = 'ylwoi'

from tkinter import *
import time

root = Tk()
root.attributes("-fullscreen", True)
canvas = Canvas(root, width='600', height='600', bg='black')
canvas.pack()

fv = (3**0.5)/2

def draw_hexagon(x, y, size):
    canvas.create_polygon(x+size/2, y-size*fv, x-size/2, y-size*fv, x-size, y, x-size/2, y+size*fv, x+size/2, y+size*fv, x+size, y, outline='yellow', width='1', fill='')

def recursive(x, y, size):
    draw_hexagon(x, y, size)
    time.sleep(0.1)
    canvas.update()
    if size > 10:
        recursive(x-size*fv/3.46, y-size*fv/2, size/2)
        recursive(x-size*fv/3.46, y+size*fv/2, size/2)
        recursive(x+size/2, y, size/2)


recursive(300, 300, 300)

root.mainloop()
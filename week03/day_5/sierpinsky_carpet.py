__author__ = 'ylwoi'

from tkinter import *
import time
import random

root = Tk()
canvas = Canvas(root, width='600', height='600', bg='black')
canvas.pack()

colors = ['red', 'yellow', 'white', 'orange', 'green', 'pink']

def draw_square(x, y, size):
    canvas.create_rectangle(x+size, y+size, x+2*size, y+2*size, fill=random.choice(colors))


def recursive(x, y, size):
    draw_square(x, y, size)
    time.sleep(0.01)
    canvas.update()
    if size > 10:
        recursive(x+size/288, y+size/288, size/3)
        recursive(x+size/288, y+size, size/3)
        recursive(x+size/288, y+size*2, size/3)

        recursive(x+size, y+size/288, size/3)
        recursive(x+size, y+size*2, size/3)

        recursive(x+size*2, y+size/288, size/3)
        recursive(x+size*2, y+size, size/3)
        recursive(x+size*2, y+size*2, size/3)

recursive(0, 0, 200)


root.mainloop()

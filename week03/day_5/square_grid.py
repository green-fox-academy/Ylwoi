__author__ = 'ylwoi'

from tkinter import *
import time
import random

root = Tk()
canvas = Canvas(root, width='600', height='600', bg='black')
canvas.pack()

colors = ['red', 'yellow', 'white', 'orange', 'green', 'pink']

def draw_square(x, y, size):
    canvas.create_rectangle(x+size/2, y+size/2, x+size*3/2, y+size*3/2, outline=random.choice(colors), width=size/16)


def recursive(x, y, size):
    draw_square(x, y, size)
    time.sleep(0.1)
    canvas.update()
    if size > 50:
        recursive(x+size/75, y+size/75, size/2)
        recursive(x+size/75, y+size, size/2)
        recursive(x+size, y+size/75, size/2)
        recursive(x+size, y+size, size/2)

recursive(0, 0, 300)


root.mainloop()

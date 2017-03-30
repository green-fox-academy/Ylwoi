__author__ = 'ylwoi'

from tkinter import *
import time

root = Tk()
canvas = Canvas(root, width='600', height='600', bg='yellow')
canvas.pack()


def draw_square(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size, outline='black', width='1')


def recursive(x, y, size):
    draw_square(x, y, size)
    if size > 5:
        recursive(x+1/3*size, y, size/3)
        recursive(x, y+1/3*size, size/3)
        recursive(x+2/3*size, y+1/3*size, size/3)
        recursive(x+1/3*size, y+2/3*size, size/3)


recursive(0, 0, 600)


root.mainloop()
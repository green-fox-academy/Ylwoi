__author__ = 'ylwoi'

from tkinter import *
import time

root = Tk()
canvas = Canvas(root, width='600', height='600')
canvas.pack()


def draw_square(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size, outline='green', width='2')
    canvas.create_oval(x, y, x+size, y+size, outline='green', width='2')
    canvas.create_polygon(x, y, x+size, y+size, outline='green', width='2')

def recursive(x, y, size):
    draw_square(x, y, size)
    time.sleep(0.1)
    canvas.update()
    if size > 20:
        recursive(x, y, size/3)
        recursive(x+2/3*size, y, size/3)
        recursive(x, y+2/3*size, size/3)
        recursive(x+2/3*size, y+2/3*size, size/3)


recursive(10, 10, 500)


root.mainloop()
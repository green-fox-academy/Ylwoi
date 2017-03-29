__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.

top_line = canvas.create_line(20, 20, 120, 20, fill='red')
left_line = canvas.create_line(20, 20, 20 , 120, fill='green')
bottom_line = canvas.create_line(20, 120, 120, 120, fill='blue')
right_line = canvas.create_line(120, 20, 120, 120, fill='yellow')

root.mainloop()

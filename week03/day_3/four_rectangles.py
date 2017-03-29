__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.

rectangle1 = canvas.create_rectangle(10, 10, 40, 40, fill='red')
rectangle2 = canvas.create_rectangle(40, 40, 80, 80, fill='green')
rectangle3 = canvas.create_rectangle(80, 80, 130, 130, fill='blue')
rectangle4 = canvas.create_rectangle(130, 130, 190, 190, fill='yellow')


root.mainloop()

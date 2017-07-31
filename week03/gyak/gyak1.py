__author__ = 'cw'

from tkinter import *
root = Tk()
the_label = Label(root, text='First window')
the_label.pack()

canvas = Canvas(root, width='200', height='100')
canvas.pack()

black_line = canvas.create_line(0, 0, 200, 50)
red_line = canvas.create_line(0, 100, 200, 50, fill='red')
green_box = canvas.create_rectangle(25, 25, 130, 60, fill='green')
polygone = canvas.create_polygon(25, 25 , 50, 50, 75, 75,)
oval = canvas.create_oval(20, 20 , 30, 30)
img = PhotoImage(file='')
picture = canvas.create_image(50, 50, anchor='NW', file='img')
canvas.delete(red_line)

root.mainloop()
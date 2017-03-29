__author__ = 'ylwoi'

from tkinter import *
import random

root = Tk()

canvas = Canvas(root, width='300', height='300', bg='black')
canvas.pack()

# draw the night sky:
# - The background should be black
# - The stars should be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)

colors = ['silver', 'grey', 'darkgray', 'lightgray', 'gainsboro', 'white']

for i in range(random.randrange(20, 50)):
    x = random.randrange(10, 290)
    y = random.randrange(10, 290)
    size = random.randint(1, 3)
    canvas.create_rectangle(x-size, y-size, x+size, y+size, fill=random.choice(colors))

root.mainloop()
__author__ = 'ylwoi'

from tkinter import *


class Map(object):
    def __init__(self):
        self.tileX = 36
        self.tileY = 36
        self.floor_pic = PhotoImage(file='assets\Floor.png')
        self.wall_pic = PhotoImage(file='assets\wall.png')

    def draw_floor(self, canvas):
        for draw_row in range(10):
            for draw_column in range(10):
                canvas.create_image(self.tileX+draw_row*72, self.tileY+draw_column*72, image=self.floor_pic)

    def draw_wall(self, canvas):
        wall_matrix = [
            [3, 5], [3, 5, 7, 8], [1, 2, 3, 5, 7, 8], [5], [0, 1, 2, 3, 5, 6, 7, 8],
            [1, 3, 8], [1, 3, 5, 6, 8], [5, 6, 8], [1, 2, 3, 8], [3, 5, 6, 8], [1, 3, 5]
        ]

        for i in wall_matrix:
            for j in i:
               canvas.create_image(self.tileX + j*72, self.tileY + wall_matrix.index(i)*72, image=self.wall_pic)


class Hero(object):
    def __init__(self):
        self.heroX = 36
        self.heroY = 36
        self.hero_pic_down = PhotoImage(file='assets\hero-down.png')
        self.hero_pic_up = PhotoImage(file='assets\hero-up.png')
        self.hero_pic_left = PhotoImage(file='assets\hero-left.png')
        self.hero_pic_right = PhotoImage(file='assets\hero-right.png')

    def draw_hero(self, canvas, hero_picture):
        self.a = canvas.create_image(self.heroX, self.heroY, image=hero_picture)

# Create the tk environment as usual
root = Tk()
canvas = Canvas(root, width=720, height=720)

# Creating a box that can draw itself in a certain position
game_map = Map()
hero = Hero()

# Create a function that can be called when a key pressing happens
def on_key_press(e):
    # When the keycode is 111 (up arrow) we move the position of our box higher
    canvas.delete(hero.a)
    if e.keysym == 'Up':
        hero.heroY = hero.heroY - 72
        hero.draw_hero(canvas, hero.hero_pic_up)
    elif e.keysym == 'Down':
        hero.heroY = hero.heroY + 72
        hero.draw_hero(canvas, hero.hero_pic_down)
    elif e.keysym == 'Left':
        hero.heroX = hero.heroX - 72
        hero.draw_hero(canvas, hero.hero_pic_left)
    elif e.keysym == 'Right':
        hero.heroX = hero.heroX + 72
        hero.draw_hero(canvas, hero.hero_pic_right)
    # and lower if the key that was pressed the down arrow
    # draw the box again in the new position

# Tell the canvas that we prepared a function that can deal with the key press events
canvas.bind("<KeyPress>", on_key_press)

canvas.pack()

# Select the canvas to be in focused so it actually recieves the key hittings
canvas.focus_set()

# Draw the box in the initial position
game_map.draw_floor(canvas)
game_map.draw_wall(canvas)
hero.draw_hero(canvas, hero.hero_pic_down)

root.mainloop()


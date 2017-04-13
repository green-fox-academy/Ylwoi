__author__ = 'ylwoi'

from tkinter import *
import time


class Map(object):
    def __init__(self):
        self.floor_pic = PhotoImage(file='assets\Floor.png')
        self.wall_pic = PhotoImage(file='assets\wall.png')
        self.wall_matrix = [
            [3, 5], [3, 5, 7, 8], [1, 2, 3, 5, 7, 8], [5], [0, 1, 2, 3, 5, 6, 7, 8],
            [1, 3, 8], [1, 3, 5, 6, 8], [5, 6, 8], [1, 2, 3, 8], [3, 5, 6, 8], [1, 3, 5]
        ]

    def draw_floor(self):
        for draw_row in range(10):
            for draw_column in range(11):
                logic.draw_tile(draw_row, draw_column, self.floor_pic)

    def draw_wall(self):
        for i in self.wall_matrix:
            for j in i:
                logic.draw_tile(j, self.wall_matrix.index(i), self.wall_pic)


class GameLogic():
    def __init__(self):
        canvas.bind("<KeyPress>", self.on_key_press)

    def draw_tile(self, x, y, picture):
        self.tile = canvas.create_image((x+0.5)*72, (y+0.5)*72, image=picture)

    def move_control(self, x, y):
        self.x = x
        self.y = y
        if self.x < 0 or self.x > 9:
            return False
        if self.y < 0 or self.y > 10:
            return False
        for i in game_map.wall_matrix:
            for j in i:
                if self.x == j and self.y == game_map.wall_matrix.index(i):
                    return False
        return True

    def on_key_press(self, e):
        self.e = e
        canvas.delete(logic.tile)
        if self.e.keysym == 'Up':
            if logic.move_control(hero.heroX, hero.heroY-1) == True:
                hero.heroY = hero.heroY - 1
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_up)
            else:
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_up)

        elif self.e.keysym == 'Down':
            if logic.move_control(hero.heroX, hero.heroY+1) == True:
                hero.heroY = hero.heroY + 1
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_down)
            else:
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_down)

        elif self.e.keysym == 'Left':
            if logic.move_control(hero.heroX-1, hero.heroY) == True:
                hero.heroX = hero.heroX - 1
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_left)
            else:
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_left)

        elif self.e.keysym == 'Right':
            if logic.move_control(hero.heroX+1, hero.heroY) == True:
                hero.heroX = hero.heroX + 1
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_right)
            else:
                logic.draw_tile(hero.heroX, hero.heroY, hero.hero_pic_right)


class Hero():
    def __init__(self):
        self.heroX = 0
        self.heroY = 0
        self.hero_pic_down = PhotoImage(file='assets\hero-down.png')
        self.hero_pic_up = PhotoImage(file='assets\hero-up.png')
        self.hero_pic_left = PhotoImage(file='assets\hero-left.png')
        self.hero_pic_right = PhotoImage(file='assets\hero-right.png')

    def draw_hero(self):
        logic.draw_tile(self.heroX, self.heroY, self.hero_pic_down)


class Skeleton():
    def __init__(self, x, y):
        self.skeleton_pic = PhotoImage(file='assets\skeleton.png')
        self.skeletonX = x
        self.skeletonY = y

    def draw_skeleton(self):
        self.ds = logic.draw_tile(self.skeletonX, self.skeletonY, self.skeleton_pic)


root = Tk()
canvas = Canvas(root, width=720, height=792)

game_map = Map()
hero = Hero()
logic = GameLogic()
skel_1 = Skeleton(4, 1)

canvas.pack()
canvas.focus_set()

game_map.draw_floor()
game_map.draw_wall()
hero.draw_hero()

#logic.skeleton_move(skel_1)

root.mainloop()


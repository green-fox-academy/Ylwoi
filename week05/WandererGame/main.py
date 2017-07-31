__author__ = 'ylwoi'

from tkinter import *
import time
import random


class Map(object):
    def __init__(self):
        self.floor_pic = PhotoImage(file='assets\Floor.png')
        self.wall_pic = PhotoImage(file='assets\wall.png')
        self.wall_matrix = self.read_maps('map1.txt')

    def read_maps(self, text_file):
        self.game_map = open(text_file, mode='r')
        return list(list(map(int, line.split(','))) for line in self.game_map)

    def draw_floor(self):
        for draw_column in range(10):
            for draw_row in range(11):
                logic.draw_tile(draw_column, draw_row, self.floor_pic)

    def draw_wall(self):
        for i in self.wall_matrix:
            for j in i:
                logic.draw_tile(j, self.wall_matrix.index(i), self.wall_pic)


class GameLogic():
    def __init__(self):
        canvas.bind("<KeyPress>", self.on_key_press)

    def draw_tile(self, x, y, picture):
        return canvas.create_image((x+0.5)*72, (y+0.5)*72, image=picture)

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
        self.count = 1
        canvas.delete(hero.dh)
        if self.e.keysym == 'Up':
            self.count += 1
            if logic.move_control(hero.heroX, hero.heroY-1) == True:
                hero.heroY = hero.heroY - 1
                hero.draw_hero(hero.hero_pic_up)
            else:
                hero.draw_hero(hero.hero_pic_down)

        elif self.e.keysym == 'Down':
            self.count += 1
            if logic.move_control(hero.heroX, hero.heroY+1) == True:
                hero.heroY = hero.heroY + 1
                hero.draw_hero(hero.hero_pic_down)
            else:
                hero.draw_hero(hero.hero_pic_up)

        elif self.e.keysym == 'Left':
            self.count += 1
            if logic.move_control(hero.heroX-1, hero.heroY) == True:
                hero.heroX = hero.heroX - 1
                hero.draw_hero(hero.hero_pic_left)
            else:
                hero.draw_hero(hero.hero_pic_right)

        elif self.e.keysym == 'Right':
            self.count += 1
            if logic.move_control(hero.heroX+1, hero.heroY) == True:
                hero.heroX = hero.heroX + 1
                hero.draw_hero(hero.hero_pic_right)
            else:
                hero.draw_hero(hero.hero_pic_left)


class Hero():
    def __init__(self):
        self.heroX = 0
        self.heroY = 0
        self.hero_pic_down = PhotoImage(file='assets\hero-down.png')
        self.hero_pic_up = PhotoImage(file='assets\hero-up.png')
        self.hero_pic_left = PhotoImage(file='assets\hero-left.png')
        self.hero_pic_right = PhotoImage(file='assets\hero-right.png')
        self.dh = None

    def draw_hero(self, hero_pic):
        self.dh = logic.draw_tile(self.heroX, self.heroY, hero_pic)


class Skeleton(GameLogic):
    def __init__(self, x, y):
        self.skeleton_pic = PhotoImage(file='assets\skeleton.png')
        self.skeletonX = x
        self.skeletonY = y
        self.ds = None

    def draw_skeleton(self):
        self.ds = logic.draw_tile(self.skeletonX, self.skeletonY, self.skeleton_pic)

    """def skeleton_move(self, x_or_y, start, stop):
        if x_or_y == 'y':
            while self.skeletonY < stop:
                canvas.delete(self.ds)
                self.skeletonY += 0.1
                self.draw_skeleton()
                time.sleep(0.1)
                canvas.update()
                if self.skeletonY > stop-1:
                    while self.skeletonY > start:
                        canvas.delete(self.ds)
                        self.skeletonY -= 0.1
                        self.draw_skeleton()
                        time.sleep(0.1)
                        canvas.update()
        if x_or_y == 'x':
            while self.skeletonX < stop:
                canvas.delete(self.ds)
                self.skeletonX += 0.1
                self.draw_skeleton()
                time.sleep(0.1)
                canvas.update()
                if self.skeletonX > stop-1:
                    while self.skeletonX > start:
                        canvas.delete(self.ds)
                        self.skeletonX -= 0.1
                        self.draw_skeleton()
                        time.sleep(0.1)
                        canvas.update()"""


root = Tk()
canvas = Canvas(root, width=720, height=792)

game_map = Map()
hero = Hero()
logic = GameLogic()
skel_1 = Skeleton(4, 0)
skel_2 = Skeleton(0, 7)

canvas.pack()
canvas.focus_set()

game_map.draw_floor()
game_map.draw_wall()
hero.draw_hero(hero.hero_pic_down)
skel_1.draw_skeleton()
skel_2.draw_skeleton()

#skel_1.skeleton_move('y', 1, 6)
#skel_2.skeleton_move('x', 1, 4)

root.mainloop()
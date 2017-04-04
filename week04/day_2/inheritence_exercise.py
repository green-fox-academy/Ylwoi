__author__ = 'ylwoi'

class Person():
    def __init__(self, name='Jane Doe', age=30, gender='female'):
        self.name = name
        self.age = age
        self.gender = gender
    def introduce(self):
        print("Hi, I'm", self.name, "a", self.age, "year old", self.gender)
    def get_goal(self):
        print("My goal is: Live for the moment!")


std_pers = Person()
vili = Person('Vilmos', 61, 'male')

vili.introduce()
std_pers.introduce()
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

class Student(Person):
    def __init__(self, name='Jane Doe', age=30, gender='female', previous_organization='The School of Life', skipped_days=0):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = 0
    def get_goal(self):
        print('Be a junior software developer.')
    def introduce(self):
        super().introduce()
        print(" from", self.previous_organization, "who skipped", self.skipped_days, "days from the course already.")
    def skip_days(self, number_of_days):
        self.number_of_days = number_of_days
        self.skipped_days += number_of_days



std_pers = Person()
vili = Person('Vilmos', 61, 'male')
vili.introduce()
std_pers.introduce()

std_student = Student()
dexter = Student('Dexter', 20, 'male', 'Fox school')
dexter.get_goal()
std_student.skip_days(3)
dexter.introduce()
std_student.introduce()
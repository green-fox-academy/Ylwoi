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


class Mentor(Person):
    def __init__(self, name='Jane Doe', age=30, gender='female', level='Intermediate'):
        super().__init__(name, age, gender)
        self.level = level

    def get_goal(self):
        print("Educate brilliant junior software developers.")

    def introduce(self):
        super().introduce()
        print(self.level, 'mentor.')


class Sponsor(Person):
    def __init__(self, name='Jane Doe', age=30, gender='female', company='Google', hired_students=0):
        super().__init__(name, age, gender)
        self.company = company
        self.hired_students = 0

    def get_goal(self):
        print("Hire brilliant junior software developers.")

    def introduce(self):
        super().introduce()
        print("who represents", self.company, "and hired", self.hired_students, "students so far.")

    def hire(self):
        self.hired_students += 1



"""
std_pers = Person()
vili = Person('Vilmos', 61, 'male')
vili.introduce()
std_pers.introduce() """

"""
std_student = Student()
dexter = Student('Dexter', 20, 'male', 'Fox school')
dexter.get_goal()
std_student.skip_days(3)
dexter.introduce()
std_student.introduce() """

"""
std_mentor = Mentor()
gabor = Mentor('Gabor', 39, 'male', 'junior')
std_mentor.get_goal()
std_mentor.introduce()
gabor.introduce() """

std_sponsor = Sponsor()
sponsor1 = Sponsor('Joe', 36, 'male', 'Black Swan')
std_sponsor.get_goal()
sponsor1.hire()
std_sponsor.introduce()
sponsor1.introduce()
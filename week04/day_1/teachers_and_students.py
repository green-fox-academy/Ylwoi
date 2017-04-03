__author__ = 'ylwoi'

class Student:
    def learn(self):
        print("Learning")
    def question(self):
         Teacher.answer(self)

class Teacher:
    def answer(self):
        print('Answer!')
    def teach(self):
         Student.learn(self)

tanar = Teacher()
diak = Student()

diak.question()
tanar.teach()
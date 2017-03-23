__author__ = 'ylwoi'

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

# create a function that takes a list of students and prints:
#  - how many candies they have on average

students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

def list_candy(list):
    for i in list:
        if i['candies'] > 4:
            print(i['name'])

list_candy(students)

def average_candy(list):
    sum_candy = 0
    for i in list:
        sum_candy += i['candies']
    print(sum_candy / len(list))

average_candy(students)
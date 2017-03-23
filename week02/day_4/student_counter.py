__author__ = 'ylwoi'

# create a function that takes a list of students and prints:
# - how many candies are owned by students

# create a function that takes a list of students and prints:
# - Sum of the age of people who have lass than 5 candies

students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]


def candy_counter(list):
    candy_sum = 0
    for i in list:
        candy_sum += i['candies']
    print(candy_sum)

candy_counter(students)

def sum_age_by_candy(list):
    age_sum = 0
    for i in list:
        if i['candies'] < 5:
            age_sum += i['age']
    print(age_sum)

sum_age_by_candy(students)
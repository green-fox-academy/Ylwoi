__author__ = 'ylwoi'

import math

nums = int(input("How many numbers do you want? "))
num_list = []
for i in range(1, nums+1):
    print(i, ". number:")
    num_list.append(input())
sum = 0
for i in range(0, num_list.__len__()):
    sum += int(num_list[i])
print("Sum:", sum)
print("Average:", sum / nums)
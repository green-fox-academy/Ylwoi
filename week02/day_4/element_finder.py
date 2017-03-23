__author__ = 'ylwoi'

# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

numbers = [1,2,3,4,5,6,8]
match = 0
for i in range(len(numbers)):
    if numbers[i] == 7:
        print("Hoorray")
        match += 1
    if i == len(numbers)-1 and match == 0:
        print("Noooooo")


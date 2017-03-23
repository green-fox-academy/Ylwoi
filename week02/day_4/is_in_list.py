__author__ = 'ylwoi'

# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts listOfNumbers as an input
# it should return "true" if it contains all, otherwise print "false"

listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]

def isinlist(list):
    match = 0
    for i in range(len(listOfNumbers)):
        if listOfNumbers[i] == 4 or listOfNumbers[i] ==8 or listOfNumbers[i] ==12 or listOfNumbers[i] ==16:
            match += 1
    print(match)
    if match >= 4:
        return True
    else:
        return False

print(isinlist(listOfNumbers))
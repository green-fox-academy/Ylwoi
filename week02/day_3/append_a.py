__author__ = 'ylwoi'

# - Create a variable named `am` and assign the value `kuty` to it
# - Write a function called `appendA` that gets a string as an input
#   and appends an 'a' character to its end
# - Print the result of `appendA(am)`

am = 'kuty'

def appendA(text):
    text += 'a'
    return text
print(appendA(am))
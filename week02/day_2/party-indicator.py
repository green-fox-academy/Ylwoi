__author__ = 'ylwoi'

girls = int(input("Number of girls: "))
boys = int(input("Number of boys: "))
people = girls + boys
if girls == boys and people > 20:
    print("The party is excellent!")
elif boys != girls and people > 20 and girls != 0:
    print("Quite cool party")
elif 20 > people > 0:
    print("Average party")
elif girls == 0:
    print("Sausage party")
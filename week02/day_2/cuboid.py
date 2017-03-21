__author__ = 'ylwoi'
l = float(input("Enter the length of cuboid: "))
w = float(input("Enter the width of cuboid: "))
h = float(input("Enter the height of cuboid: "))
tsa = 2*(l*w+w*h+h*l)
volume = l*w*h
print("The cuboids total surface area is:", tsa)
print("The cuboids volume is:", volume)
__author__ = 'ylwoi'

#help for char coding
#ch = 't'
#ch2 = ord(ch)+1
#print(chr(ch2))

def decrypt(filename):
    my_file = open(filename, mode="r")
    list1 = my_file.readlines()
    encoded = ''
    for i in list1:
        print("")
        for j in i:
            if j ==' ':
                print(" ", end='')
            else:
                encoded = ord(j)-1
                print(chr(encoded), end="")
    my_file.close()

decrypt("encoded-lines.txt")
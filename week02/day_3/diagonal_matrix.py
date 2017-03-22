__author__ = 'ylwoi'

# - Create (dynamically) a two dimensional list
# with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output
y = int(input("Size of two dimensional list:"))
matrix = [[0 for x in range(y)] for x in range(y)]

for i in range(0, y):
    for j in range(0, y):
        if i == j:
            matrix[i][j] = 1
        if j == y-1:
            print(matrix[i][j])
        else:
            print(matrix[i][j], end=" ")
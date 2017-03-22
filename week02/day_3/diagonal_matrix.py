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

matrix = [[0 for x in range(4)] for x in range(4)]

for i in range(0, 4):
    for j in range(0, 4):
        if i == j:
            matrix[i][j] = 1
        if j == 3:
            print(matrix[i][j])
        else:
            print(matrix[i][j], end=" ")


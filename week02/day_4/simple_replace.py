__author__ = 'ylwoi'

# I would like to replace "dishwasher" with "galaxy" in this example
# Please fix it for me!
# Expected ouput: In a galaxy far far away

output = 'In a dishwasher far far away'
fix_word = 'galaxy'

#solution 1 with replace function
print(output.replace(output[5:15], fix_word))

#solution 2
print(output[0:5] + fix_word + output[15:])
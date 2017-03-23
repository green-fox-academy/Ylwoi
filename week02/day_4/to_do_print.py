__author__ = 'ylwoi'

# Add "My todo: to the beginning of the todoText"
# Add " - Download games" to the end of the todoText
# Add " - Diablo" to the end of the todoText but with indention

# Expected outpt:

# My todo:
#  - Buy milk
#  - Download games
#      - Diablo

my_todo = ""
my_todo += "My todo: \n"
my_todo += " - Buy milk \n"
my_todo += " - Download games \n"
my_todo += "    - Diablo \n"

print(my_todo)

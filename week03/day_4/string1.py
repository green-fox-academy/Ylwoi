__author__ = 'ylwoi'

# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def change_x(text):
    if text == '':
        return ''

    else:
        if text[0] == 'x':
            return 'y' + change_x(text[1:])
        else:
            return text[0] + change_x(text[1:])

print(change_x('exexexe'))
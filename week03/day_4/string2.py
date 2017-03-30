__author__ = 'ylwoi'

# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def del_x(text):
    if text == '':
        return ''

    else:
        if text[0] == 'x':
            return '' + del_x(text[1:])
        else:
            return text[0] + del_x(text[1:])

print(del_x('exexexe'))
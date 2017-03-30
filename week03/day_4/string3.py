__author__ = 'ylwoi'

# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def add_star(text):
    if text == '':
        return ''
    else:
        return text[0]+'*' + add_star(text[1:])

print(add_star('exexexe'))

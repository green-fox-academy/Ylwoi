__author__ = 'ylwoi'

class PostIt():
    def __init__(self, backgroundColor, textColor, text):
        self.backgroundColor = backgroundColor
        self.textColor = textColor
        self.text = text

post_it1 = PostIt('orange', 'blue', 'Idea 1')
post_it2 = PostIt('pink', 'black', 'Awesome')
post_it3 = PostIt('yellow', 'green', 'Superb!')
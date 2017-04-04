__author__ = 'ylwoi'

class BlogPost():
    index = 1
    def __init__(self, authorName, title, text, publicationDate, index=index):
        self.authorName = authorName
        self.title = title
        self.text = text
        self.publicationDate = publicationDate
        Blog.blog_list.append([self.index, self.authorName, self.title, self.text, self.publicationDate])
        BlogPost.index += 1

class Blog():
    blog_list = []
    def delete(self, index):
        self.index = index
        for i in Blog.blog_list:
            if i[0] == index:
                Blog.blog_list.remove(i)

    def update(self, index, blog_post):
        self.index = index
        Blog.delete(self,index)
        Blog.blog_list.append([blog_post.index, blog_post.authorName, blog_post.title, blog_post.text, blog_post.publicationDate])

all_blog = Blog()

blog1 = BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.')
blog2 = BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', "2010.10.10.")
blog3 = BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump',
                 "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take"
                 " his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer"
                 " profile thing.", "2017.03.28.")

all_blog.delete(3)
all_blog.update(2, blog3)

print(all_blog.blog_list)
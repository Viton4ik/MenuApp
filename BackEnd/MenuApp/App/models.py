from django.db import models

class Category(models.Model):
    '''Category model'''
    name = models.CharField(max_length=128)
    # description = models.TextField()

    def __str__(self):
        """ return a propper view for the admin panel """
        return f'{self.name}'
    

class File(models.Model):
    '''File model'''
    # file = models.FileField(upload_to='pictures/', null=True, blank=True)
    file = models.FileField(upload_to='pictures/', null=True)
    name = models.CharField(max_length=64, null=True, blank=True)

    def __str__(self):
        """ return a propper view for the admin panel """
        return f'{self.name}'
    

class Prescription(models.Model):
    '''Prescription model'''
    name = models.CharField(max_length=128)
    description = models.TextField()
    category = models.ManyToManyField(Category, blank=True, related_name='category')
    createTime = models.DateTimeField(auto_now_add=True)
    files = models.ManyToManyField(File, related_name='pictures')

    def __str__(self):
        """ return a propper view for the admin panel """
        return f"{self.name.title()}: {self.category} {self.description[:30]} {self.files} ... Created: {self.createTime.strftime('%d/%m/%Y %H:%M:%S')}"

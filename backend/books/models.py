from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    title = models.CharField(max_length=255)

    author = models.CharField(max_length=255)

    year = models.IntegerField()

    genre = models.CharField(max_length=100)

    description = models.TextField()

    content = models.TextField()

    edition = models.CharField(max_length=255)

    image = models.ImageField(upload_to='books/')

    rating = models.FloatField(default=0)

    category = models.CharField(max_length=100)

    status = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    book = models.ForeignKey(Book, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'book')
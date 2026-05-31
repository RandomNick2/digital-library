from rest_framework import serializers

from .models import Book, Favorite


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"

    def get_img_url(self, obj):
        return obj.image.url if obj.image else None


class FavoriteSerializer(serializers.ModelSerializer):
    book = BookSerializer(read_only=True)

    class Meta:
        model = Favorite
        fields = ["id", "book"]

from rest_framework import viewsets
from rest_framework.filters import SearchFilter

from .models import Book
from .serializers import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all().order_by('-created_at')

    serializer_class = BookSerializer

    filter_backends = [SearchFilter]

    search_fields = ['title', 'author', 'genre', 'category']

from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework import status

from .models import Favorite
from .serializers import FavoriteSerializer

class FavoriteListCreateView(APIView):
    def get(self, request):
        favorites = Favorite.objects.all()

        serializer = FavoriteSerializer(favorites, many=True)

        return Response(serializer.data)

    def post(self, request):
        book_id = request.data.get('book_id')

        favorite, created = Favorite.objects.get_or_create(
            user_id=1,
            book_id=book_id
        )

        serializer = FavoriteSerializer(favorite)

        return Response(serializer.data)


class FavoriteDeleteView(APIView):
    def delete(self, request, pk):
        favorite = Favorite.objects.get(pk=pk)

        favorite.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
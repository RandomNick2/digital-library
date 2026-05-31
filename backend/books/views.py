from rest_framework import status, viewsets
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Book, Favorite
from .serializers import BookSerializer, FavoriteSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all().order_by("-created_at")

    serializer_class = BookSerializer

    filter_backends = [SearchFilter]

    search_fields = ["title", "author", "genre", "category"]


class FavoriteListCreateView(APIView):
    def get(self, request):
        favorites = Favorite.objects.all()

        serializer = FavoriteSerializer(favorites, many=True)

        return Response(serializer.data)

    def post(self, request):
        book_id = request.data.get("book_id")

        favorite, created = Favorite.objects.get_or_create(
            user_id=request.user.id, book_id=book_id
        )

        serializer = FavoriteSerializer(favorite)

        return Response(serializer.data)


class FavoriteDeleteView(APIView):
    def delete(self, request, pk):
        favorite = Favorite.objects.get(pk=pk)

        favorite.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

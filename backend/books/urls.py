from django.urls import path
from rest_framework.routers import DefaultRouter, path

from .views import BookViewSet


router = DefaultRouter()

router.register('books', BookViewSet)

urlpatterns = router.urls
from .views import (
    FavoriteListCreateView,
    FavoriteDeleteView,
)
urlpatterns += [
    path('favorites/', FavoriteListCreateView.as_view()),

    path('favorites/<int:pk>/', FavoriteDeleteView.as_view()),
]
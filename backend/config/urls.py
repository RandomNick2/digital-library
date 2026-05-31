from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from users.views import RegisterView, LoginView


urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('books.urls')),
    path('api/', include('users.urls')),
    
    path('api/auth/register/', RegisterView.as_view()),
    path('api/auth/login/', LoginView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
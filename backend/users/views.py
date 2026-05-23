from django.contrib.auth.models import User

from django.contrib.auth import authenticate

from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework import status

from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.tokens import RefreshToken

from .models import Profile

from .serializers import ProfileSerializer


class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')

        email = request.data.get('email')

        password = request.data.get('password')

        if User.objects.filter(email=email).exists():
            return Response(
                {'error': 'Email already exists'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return Response({
            'message': 'User created'
        })


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')

        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)

        except User.DoesNotExist:
            return Response(
                {'error': 'Invalid credentials'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(
            username=user.username,
            password=password
        )

        if user is None:
            return Response(
                {'error': 'Invalid credentials'},
                status=status.HTTP_400_BAD_REQUEST
            )

        refresh = RefreshToken.for_user(user)

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = Profile.objects.get(
            user=request.user
        )

        serializer = ProfileSerializer(profile)

        return Response(serializer.data)

    def patch(self, request):
        profile = Profile.objects.get(
            user=request.user
        )

        nickname = request.data.get('nickname')

        email = request.data.get('email')

        if nickname:
            profile.nickname = nickname

        if email:
            profile.user.email = email
            profile.user.save()

        if 'avatar' in request.FILES:
            profile.avatar = request.FILES['avatar']

        profile.save()

        serializer = ProfileSerializer(profile)

        return Response(serializer.data)
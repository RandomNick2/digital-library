from rest_framework import serializers

from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        source='user.email'
    )

    class Meta:
        model = Profile

        fields = [
            'id',
            'nickname',
            'avatar',
            'email',
        ]
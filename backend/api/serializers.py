from rest_framework import serializers
from .models import *


from django.contrib.auth import get_user_model

User = get_user_model()


class Register(serializers.Serializer):
    username=serializers.CharField()
    email=serializers.EmailField()
    password=serializers.CharField()

    # others
    phone = serializers.CharField(required=False, allow_blank=True)
    location = serializers.CharField(required=False, allow_blank=True)
    service = serializers.CharField(required=False, allow_blank=True)
    experience = serializers.IntegerField(required=False)
    user_type=serializers.CharField()


    def validate(self,data):
        return data

    def create(self,validated_data):
        user=User.objects.create(username=validated_data['username'],email=validated_data['email'],user_type=validated_data['user_type'],phone=validated_data['phone'])
        user.set_password(validated_data['password'])
        user.save()
        if validated_data['user_type']=='provider':
            ProviderProfile.objects.create(user=user,location=validated_data['location'],service=validated_data['service'],experience=validated_data['experience'])
        else:
            SeekerProfile.objects.create(user=user,phone=validated_data['phone'])
        return validated_data

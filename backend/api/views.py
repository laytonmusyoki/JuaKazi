from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import *
from django.db import IntegrityError
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import login,logout

from django.contrib.auth import get_user_model

User = get_user_model()


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        print(request.data)
        serializer = Register(data=request.data)
        
        username = request.data.get('username')
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(email=request.data.get('email')).exists():
            return Response({"error": "Email already taken"}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            try:
                user = serializer.save()
                return Response({"success": "User created successfully"}, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({"error": "An error occurred while creating the user."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signin(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        print(username,password)
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
            refresh = RefreshToken.for_user(user)
            data=Register(request.user).data
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                "user":{
                    "username":data['username'],
                    "email":data['email'],
                    "user_type":data['user_type']
                }
            })
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def seekerProfile(request):
    user = request.user
    try:
        seeker_profile = SeekerProfile.objects.get(user=user)
        data = {
            'username': user.username,
            'email': user.email,
            'phone': seeker_profile.phone,
            'user_type': user.user_type
        }
        return Response(data, status=status.HTTP_200_OK)
    except SeekerProfile.DoesNotExist:
        return Response({'error': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)

        


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def signout(request):
    # logout(request)
    return Response({"success":"You have logged out successfully"})
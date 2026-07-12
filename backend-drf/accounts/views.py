from django.shortcuts import render
import rest_framework
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User 
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView, Response
from rest_framework.permissions import IsAuthenticated
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Allow any user (authenticated or not) to access this view

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can access this view:
    def get(self, request):
        response = {"message": "This is a protected view. You are authenticated!"}
        return Response(response)
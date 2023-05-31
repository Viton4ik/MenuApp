from django.shortcuts import render

from .models import Category, File, Prescription

from django.contrib.auth.models import User

# ===== rest_framework =====

from rest_framework import permissions
from rest_framework import viewsets

import django_filters.rest_framework
from App.serializers import FileSerializer, CategorySerializer, PrescriptionSerializer, UserSerializer


# create a ReadOnly
class ReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS
    

class FileViewset(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer

    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'name', ]

    # deny all by default using rest_framework
    permission_classes = [permissions.IsAuthenticated]


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'name', ]

    # deny all by default using rest_framework
    permission_classes = [permissions.IsAuthenticated]


class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer

    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'name', 'description', 'category', 'files', 'createTime', ]

    # deny all by default using rest_framework
    permission_classes = [permissions.IsAuthenticated]


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filterset_fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_active',]

    permission_classes = [permissions.IsAuthenticated]
from .models import *

from rest_framework import serializers

from django.contrib.auth.models import User


class FileSerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
       model = File
       fields = ['id', 'file', 'name',]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
       model = Category
       fields = ['id', 'name',]


# class DocumentSerializer(serializers.HyperlinkedModelSerializer):
class PrescriptionSerializer(serializers.ModelSerializer):
   class Meta:
       model = Prescription
       fields = ['id', 'name', 'description', 'category', 'files', 'createTime', ]


class UserSerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
       model = User
       fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_active', ]
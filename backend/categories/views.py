from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Category
from .serializers import CategorySerializer


class CategoryListViewSet(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    parser_classes = (MultiPartParser, FormParser)

from django.urls import path

from . import views

urlpatterns = [
    path('', views.CategoryListViewSet.as_view()),
]

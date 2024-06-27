from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
    path('main/<int:month>/', TopicViewSet.as_view({'get': 'retrieve'}), name='topic-detail-by-month'),
]
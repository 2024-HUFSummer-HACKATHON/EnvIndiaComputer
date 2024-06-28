from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
    path('main/<int:month>/', TopicViewSet.as_view({'get': 'retrieve'}), name='topic-main-by-month'),
    path('detail/<int:month>/', TopicDetailViewSet.as_view({'get': 'retrieve'}), name='topic-detail-by-month'),
    path('celebrates/<int:month>/', CelebrationViewSet.as_view(), name='celebrates'),
]
from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView

from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Topic, MonthlyDonations
from .serializers import *

from accounts.models import User

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

months = {1:'jan', 2:'feb', 3:'mar', 4:'apr', 5:'may', 6:'jun', 7:'jul', 8:'aug', 9:'sep', 10:'oct', 11:'nov', 12:'dec'}

# 메인페이지 랜딩 시 기부 주제 짧은 설명과 이미지 제공
class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    lookup_field = 'month'  

    def retrieve(self, request, month=None):
        queryset = self.get_queryset().filter(month=month)
        if not queryset.exists():
            return Response({"error": "month에 해당하는 데이터가 없습니다."}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(queryset.first())
        return Response(serializer.data)

# 기부 관련 상세 설명 및 이미지 제공
class TopicDetailViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicDetailSerializer
    lookup_field = 'month'  

    def retrieve(self, request, month=None):
        queryset = self.get_queryset().filter(month=month)
        if not queryset.exists():
            return Response({"error": "month에 해당하는 데이터가 없습니다."}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(queryset.first())
        return Response(serializer.data)
    

# 축하 페이지 및 기부단체 url 제공
class CelebrationViewSet(APIView):
    # @method_decorator(csrf_exempt)
    def patch(self, request, month):
        id = request.data.get('id')
        topic = get_object_or_404(Topic, month=month)
        serializer = CelebrationSerializer(topic, data=request.data, partial=True)
        user = User.objects.get(id=id)
        current_value = getattr(user.month_donate, months[month])
        setattr(user.month_donate, months[month], current_value + 1)
        user.month_donate.save()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
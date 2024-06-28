from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView

from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Topic
from .serializers import *

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

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
    @method_decorator(csrf_exempt)
    def patch(self, request):
        topic_id = request.data.get('id')
        topic = get_object_or_404(Topic, id=topic_id)
        serializer = CelebrationSerializer(topic, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
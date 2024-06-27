from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Topic
from .serializers import TopicSerializer

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    lookup_field = 'month'  

    def retrieve(self, request, month=None):
        queryset = self.get_queryset().filter(month=month)
        if not queryset.exists():
            return Response({"error": "month에 해당하는 데이터가 없습니다."}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
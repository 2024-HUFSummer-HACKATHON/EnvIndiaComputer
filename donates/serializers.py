from rest_framework import serializers
from .models import Topic

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('topic', 'detail_image')

class TopicDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('detail', 'detail_image')

from rest_framework import serializers
from .models import Topic

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('topic', 'detail_image')

class TopicDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('detail', 'detail2', 'detail3', 'detail_image', 'detail_image2', 'detail_image3')

class CelebrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('celebration_image', 'celebration_phrase', 'website_url')
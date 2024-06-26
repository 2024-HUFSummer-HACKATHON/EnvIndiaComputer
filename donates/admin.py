from django.contrib import admin
from .models import Topic, Card, MonthlyDonations
# Register your models here.
@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ('id', 'month', 'topic', 'target_amount', 'single_amount')
    
@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = ('id', 'cardholder_name')

@admin.register(MonthlyDonations)
class MonthlyDonationsAdmin(admin.ModelAdmin):
    list_display = ('id', 'jan', 'feb', 'mar', 'apr','may','jun','jul','aug','sep','oct','nov','dec')
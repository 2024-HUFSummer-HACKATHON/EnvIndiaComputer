from django.contrib import admin
from .models import User
# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id', 'nickname', 'name', 'birth','phoneNumber','card','month_donate')

    filter_horizontal=('topics',)
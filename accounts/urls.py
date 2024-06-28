from django.urls import path, include

from .views import FameView

app_name = 'accounts'

urlpatterns = [
    path('fame/<int:month>/', FameView.as_view()),
]
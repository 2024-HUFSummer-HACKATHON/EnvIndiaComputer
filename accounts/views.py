from django.shortcuts import render, get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import fameSerializer

from donates.models import Topic, MonthlyDonations

months = {1:'jan', 2:'feb', 3:'mar', 4:'apr', 5:'may', 6:'jun', 7:'jul', 8:'aug', 9:'sep', 10:'oct', 11:'nov', 12:'dec'}

class FameView(APIView):
    def get(self, request, month):
        topic = get_object_or_404(Topic, month=month)
        filter_condition = {f"{months[month]}__gte": 1}
        donators = MonthlyDonations.objects.filter(**filter_condition)
        donators.order_by(f"-{months[month]}")
        single_amount = topic.single_amount
        present_total_money = 0
        donators_lst = []
        for donator in donators:
            single_amount_total = getattr(donator, months[month]) * single_amount
            present_total_money += single_amount_total
            donators_lst.append({"name":donator.user.nickname, "money": single_amount_total, "contribute":float(single_amount_total) / topic.target_amount * 100})
        
        total_progress = present_total_money/topic.target_amount*100
        return Response({
                    "image": "static/{0}/progress_{1}.png".format(months[month], (present_total_money/topic.target_amount*100)//10 * 10),
                    "total_progress": total_progress,
                    "ranking": donators_lst
                },
                status=status.HTTP_200_OK,)
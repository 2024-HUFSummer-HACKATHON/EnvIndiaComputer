from django.db import models

# Create your models here.

class Topic(models.Model):
    month = models.IntegerField()
    topic = models.CharField(max_length=200)
    detail = models.TextField()
    detail_image = models.URLField(max_length=200)
    target_amount = models.IntegerField()
    single_amount = models.IntegerField()
    website_url = models.URLField(max_length=200)
    celebration_image = models.URLField(max_length=200)
    celebration_phrase = models.CharField(max_length=200)
    donation_paper =  models.URLField(max_length=200)

class Card(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cardholder_name = models.CharField(max_length=100)
    card_number = models.CharField(max_length=16)
    MM = models.CharField(max_length=2)
    YY = models.CharField(max_length=2)  
    cvc = models.CharField(max_length=3)
    card_pwd = models.CharField(max_length=2)  

class MonthlyDonations(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    jan = models.IntegerField(null=True, blank=True)
    feb = models.IntegerField(null=True, blank=True)
    mar = models.IntegerField(null=True, blank=True)
    apr = models.IntegerField(null=True, blank=True)
    may = models.IntegerField(null=True, blank=True)
    jun = models.IntegerField(null=True, blank=True)
    jul = models.IntegerField(null=True, blank=True)
    aug = models.IntegerField(null=True, blank=True)
    sep = models.IntegerField(null=True, blank=True)
    oct = models.IntegerField(null=True, blank=True)
    nov = models.IntegerField(null=True, blank=True)
    dec = models.IntegerField(null=True, blank=True)

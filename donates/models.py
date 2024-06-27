from django.db import models
# from accounts.models import User

# Create your models here.

class Topic(models.Model):
    month = models.IntegerField()
    topic = models.CharField(max_length=200)
    detail = models.TextField()
    detail_image = models.ImageField(blank = True, upload_to="detail")
    target_amount = models.IntegerField()
    single_amount = models.IntegerField()
    website_url = models.TextField()
    celebration_image = models.ImageField(blank = True, upload_to="celebrate")
    celebration_phrase = models.CharField(max_length=200)
    donation_paper =  models.ImageField(blank = True, upload_to="donationPaper")

    def __str__(self):
        return self.topic

class Card(models.Model):
    cardholder_name = models.CharField(max_length=100)
    card_number = models.CharField(max_length=16)
    MM = models.CharField(max_length=2)
    YY = models.CharField(max_length=2)  
    cvc = models.CharField(max_length=3)
    card_pwd = models.CharField(max_length=2)  

class MonthlyDonations(models.Model):
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

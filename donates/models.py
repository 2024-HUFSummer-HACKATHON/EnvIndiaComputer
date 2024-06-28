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
    jan = models.IntegerField(null=True, blank=True, default= 0)
    feb = models.IntegerField(null=True, blank=True, default= 0)
    mar = models.IntegerField(null=True, blank=True, default= 0)
    apr = models.IntegerField(null=True, blank=True, default= 0)
    may = models.IntegerField(null=True, blank=True, default= 0)
    jun = models.IntegerField(null=True, blank=True, default= 0)
    jul = models.IntegerField(null=True, blank=True, default= 0)
    aug = models.IntegerField(null=True, blank=True, default= 0)
    sep = models.IntegerField(null=True, blank=True, default= 0)
    oct = models.IntegerField(null=True, blank=True, default= 0)
    nov = models.IntegerField(null=True, blank=True, default= 0)
    dec = models.IntegerField(null=True, blank=True, default= 0)

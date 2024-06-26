from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from donates.models import Card, MonthlyDonations, Topic

from django.utils import timezone

class UserManager(BaseUserManager):
    def create_user(self, user_id, password, **kwargs):
        if not user_id:
            raise ValueError('Users must have an user_id')
        user = self.model(
            user_id=user_id,
            password = password
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, user_id=None, password=None, **extra_fields):
        superuser = self.create_user(
            user_id=user_id,
            password=password,
        )
        
        superuser.is_staff = True
        superuser.is_superuser = True
        superuser.is_active = True
        
        superuser.save(using=self._db)
        return superuser

class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.CharField(max_length=50, unique=True)
    nickname = models.CharField(max_length=20)
    name = models.CharField(max_length=5)
    birth = models.CharField(max_length=6)
    phoneNumber = models.CharField(max_length=13)
    card = models.OneToOneField(Card, on_delete=models.CASCADE, null=True, blank=True)
    month_donate = models.OneToOneField(MonthlyDonations,on_delete=models.CASCADE, null=True, blank=True)
    topics = models.ManyToManyField(Topic, null=True, blank=True)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'user_id'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.nickname
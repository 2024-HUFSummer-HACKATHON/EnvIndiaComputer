# Generated by Django 5.0.6 on 2024-06-26 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cardholder_name', models.CharField(max_length=100)),
                ('card_number', models.CharField(max_length=16)),
                ('MM', models.CharField(max_length=2)),
                ('YY', models.CharField(max_length=2)),
                ('cvc', models.CharField(max_length=3)),
                ('card_pwd', models.CharField(max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='MonthlyDonations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jan', models.IntegerField(blank=True, null=True)),
                ('feb', models.IntegerField(blank=True, null=True)),
                ('mar', models.IntegerField(blank=True, null=True)),
                ('apr', models.IntegerField(blank=True, null=True)),
                ('may', models.IntegerField(blank=True, null=True)),
                ('jun', models.IntegerField(blank=True, null=True)),
                ('jul', models.IntegerField(blank=True, null=True)),
                ('aug', models.IntegerField(blank=True, null=True)),
                ('sep', models.IntegerField(blank=True, null=True)),
                ('oct', models.IntegerField(blank=True, null=True)),
                ('nov', models.IntegerField(blank=True, null=True)),
                ('dec', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('month', models.IntegerField()),
                ('topic', models.CharField(max_length=200)),
                ('detail', models.TextField()),
                ('detail_image', models.ImageField(blank=True, upload_to='detail')),
                ('target_amount', models.IntegerField()),
                ('single_amount', models.IntegerField()),
                ('website_url', models.TextField()),
                ('celebration_image', models.ImageField(blank=True, upload_to='celebrate')),
                ('celebration_phrase', models.CharField(max_length=200)),
                ('donation_paper', models.ImageField(blank=True, upload_to='donationPaper')),
            ],
        ),
    ]

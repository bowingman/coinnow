# Generated by Django 3.2.8 on 2022-11-17 09:21

import backend.categories.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=backend.categories.models.upload_to),
        ),
    ]
import random
import string
from django.db import models

from backend.categories.models import Category


def upload_to(instance, filename):
    return 'images/products/{filename}'.format(filename=''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase, k=30)))


class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    current_price = models.IntegerField()
    minimum_price = models.IntegerField()
    maximum_price = models.IntegerField()
    quantity = models.IntegerField()
    auto_stock_amount = models.IntegerField()
    price_change_amount = models.IntegerField()
    auto_quantity_change = models.IntegerField(default=100)

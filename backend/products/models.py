from django.db import models
from backend.categories.models import Category


class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    # image = models.TextField()
    image = models.ImageField(upload_to='images/products/')
    current_price = models.IntegerField()
    minimum_price = models.IntegerField()
    maximum_price = models.IntegerField()
    quantity = models.IntegerField()
    auto_stock_amount = models.IntegerField()
    price_change_amount = models.IntegerField()

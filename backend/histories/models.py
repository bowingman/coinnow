from datetime import datetime
from django.db import models

from backend.users.models import User
from backend.categories.models import Category
from backend.products.models import Product


class BuyHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    product_price = models.IntegerField()
    quantity = models.IntegerField()
    total_amount = models.IntegerField()
    created_at = models.DateTimeField(default=datetime.now())


class SellHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    product_price = models.IntegerField()
    quantity = models.IntegerField()
    total_amount = models.IntegerField()
    created_at = models.DateTimeField(default=datetime.now())


class ProductUserRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField()

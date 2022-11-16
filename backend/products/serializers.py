from rest_framework import serializers

from .models import Product


class ProductSerializer(serializers.Serializer):
    class Meta:
        model = Product
        fields = ['id', 'description', 'image', 'current_price', 'minimum_price',
                  'maximum_price', 'quantity', 'auto_stock_amount', 'price_change_amount']

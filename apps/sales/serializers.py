from rest_framework import serializers
from .models import Bundle, Order, OrderItem, Rental, Payment
from apps.customer.serializers import CustomerSerializer
from apps.university_info.serializers import CourseSerializer
from apps.inventory.serializers import ProductSerializer

class BundleSerializer(serializers.ModelSerializer):
    product = ProductSerializer(many=True)

    class Meta:
        model = Bundle
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    bundle = BundleSerializer()

    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    course = CourseSerializer()
    orderitem_set = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

class RentalSerializer(serializers.ModelSerializer):
    order_item = OrderItemSerializer()
    customer = CustomerSerializer()
    course = CourseSerializer()

    class Meta:
        model = Rental
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    order = OrderSerializer()

    class Meta:
        model = Payment
        fields = '__all__'
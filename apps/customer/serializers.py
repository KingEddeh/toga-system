from rest_framework import serializers
from .models import Customer, Measurement

class ImportCustomerSerializer(serializers.Serializer):
    file = serializers.FileField()

class MeasurementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measurement
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
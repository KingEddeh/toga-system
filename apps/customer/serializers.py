from rest_framework import serializers
from .models import Customer, Measurement

class MeasurementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measurement
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    measurement = MeasurementSerializer(many=True, read_only=True)
    class Meta:
        model = Customer
        fields = '__all__'
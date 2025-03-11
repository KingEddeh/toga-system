from rest_framework import viewsets
from .models import Customer, Measurement
from .serializers import CustomerSerializer, MeasurementSerializer
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class MeasurementViewSet(viewsets.ModelViewSet):
    queryset = Measurement.objects.all()
    serializer_class = MeasurementSerializer

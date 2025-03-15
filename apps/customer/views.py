from rest_framework import viewsets
from .models import Customer, Measurement
from .serializers import CustomerSerializer, MeasurementSerializer, ImportCustomerSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
import pandas as pandas
from django.db.models import Q

class ImportCustomerAPIView(APIView):
    serializer_class = ImportCustomerSerializer
    parser_classes = (MultiPartParser, FormParser)
       
    def post(self, request):
        try:
            data = request.FILES
            serializer = self.serializer_class(data=data)
            if not serializer.is_valid():
                return Response({
                    'status': False,
                    'message': 'Provide a valid file to import customers'
                }, status=status.HTTP_400_BAD_REQUEST)
            excel_file = data.get('file')
            df = pandas.read_excel(excel_file, sheet_name=0)
            customers = []
            for _, row in df.iterrows():
                if not Customer.objects.filter(
                    (Q(email=row['email']) | Q(phone=row['phone']) | (Q(first_name=row['first_name']) & Q(last_name=row['last_name']) & Q(middle_name=row['middle_name'])))
                ).exists():
                    customer = Customer(
                        first_name=row['first_name'],
                        middle_name=row['middle_name'],
                        last_name=row['last_name'],
                        suffix=row.get('suffix', ''),
                        email=row['email'],
                        phone=row['phone'],
                        gender=row['gender'],
                        height=row['height'],
                        length=row['length'],
                    )
                    customer._set_size()
                    customers.append(customer)
            Customer.objects.bulk_create(customers)
            return Response({
                'status': True,
                'message': 'Customers imported successfully'
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({
                'status': False,
                'message': str(e),
            }, status=status.HTTP_400_BAD_REQUEST)

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    

class MeasurementViewSet(viewsets.ModelViewSet):
    queryset = Measurement.objects.all()
    serializer_class = MeasurementSerializer

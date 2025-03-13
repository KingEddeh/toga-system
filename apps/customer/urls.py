from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import CustomerViewSet, MeasurementViewSet, ImportCustomerAPIView

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'measurements', MeasurementViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('import/', views.ImportCustomerAPIView.as_view(), name='import-customer'),
]
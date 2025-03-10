from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, MeasurementViewSet

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'measurements', MeasurementViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BundleViewSet, OrderViewSet, OrderItemViewSet, RentalViewSet, PaymentViewSet

router = DefaultRouter()
router.register(r'bundles', BundleViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)
router.register(r'rentals', RentalViewSet)
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
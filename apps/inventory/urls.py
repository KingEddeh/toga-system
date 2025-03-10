from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InventoryTransactionViewSet, InventoryViewSet, ProductViewSet, CategoryViewSet, SupplierViewSet

router = DefaultRouter()
router.register(r'inventory-transactions', InventoryTransactionViewSet)
router.register(r'inventories', InventoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'suppliers', SupplierViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
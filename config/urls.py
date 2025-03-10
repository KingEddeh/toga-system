from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('customers/', include('apps.customer.urls')),
    path('university-info/', include('apps.university_info.urls')), 
    path('inventory/', include('apps.inventory.urls')),
    path('sales/', include('apps.sales.urls')),
]
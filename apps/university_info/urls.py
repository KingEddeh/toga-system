from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, CollegeViewSet, EducationViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'colleges', CollegeViewSet)
router.register(r'educations', EducationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
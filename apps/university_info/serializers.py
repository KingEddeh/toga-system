from rest_framework import serializers
from .models import Course, College, Education

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CollegeSerializer(serializers.ModelSerializer):
    course = CourseSerializer()

    class Meta:
        model = College
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    course = CourseSerializer()

    class Meta:
        model = Education
        fields = '__all__'
from django.db import models

class College(models.Model):
    name = models.CharField(max_length=255)
    hood_color = models.CharField(max_length=50)
    gown_style = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=255)
    degree_type = models.CharField(max_length=50, choices=[('BS', 'Bachelor of Science'), ('BA', 'Bachelor of Arts'), ('MS', 'Master of Science'), ('PhD', 'Doctorate')])
    college = models.ForeignKey(College, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} ({self.degree_type})"

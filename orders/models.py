from django.db import models
from users.models import User
from gowns.models import GownPart

class Order(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    gown_parts = models.ManyToManyField(GownPart, blank=True)
    is_full_set = models.BooleanField(default=False)  # If true, assigns all 4 parts
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Rejected', 'Rejected')], default='Pending')

    def save(self, *args, **kwargs):
        if self.is_full_set:
            self.gown_parts.set(GownPart.objects.all())
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order {self.id} by {self.student.username} ({self.status})"
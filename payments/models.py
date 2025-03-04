from django.db import models
from users.models import User

class Payment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    date_of_payment = models.DateField()
    mode_of_payment = models.CharField(max_length=50, choices=[('Cash', 'Cash'), ('Online', 'Online Transfer')])
    transaction_number = models.CharField(max_length=100, blank=True, null=True)
    receipt_screenshot = models.ImageField(upload_to='receipts/', blank=True, null=True)

    def __str__(self):
        return f"Payment by {self.student.username} on {self.date_of_payment}"
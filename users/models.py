from django.db import models

class StudentSlip(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    height = models.DecimalField(max_digits=4, decimal_places=2)
    shoulder_length = models.DecimalField(max_digits=4, decimal_places=2)
    gown_size = models.CharField(max_length=20, blank=True, null=True)  # Auto-calculated but can be changed
    section = models.CharField(max_length=20)

    def save(self, *args, **kwargs):
        if not self.gown_size:
            self.gown_size = self.calculate_gown_size()
        super().save(*args, **kwargs)

    def calculate_gown_size(self):
        if self.height < 150:
            return "Small"
        elif self.height < 170:
            return "Medium"
        else:
            return "Large"

    def __str__(self):
        return f"{self.user.get_full_name()} - {self.course.name}"


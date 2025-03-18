from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    suffix = models.CharField(max_length=50, blank=True, null=True)
    full_name = models.CharField(max_length=200, blank=True, null=True)
    course = models.CharField(max_length=200)
    phone = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(max_length=200, blank=True, null=True)
    gender = models.CharField(max_length=200)
    shoulder_length = models.CharField(max_length=3, default='0', blank=True, null=True)
    height = models.CharField(max_length=3, default='0', blank=True, null=True)
    size = models.CharField(max_length=200, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        full_name = f"{self.first_name} {self.middle_name} {self.last_name}"
        if self.suffix:
            full_name += f" {self.suffix}"
        return full_name
   
    def _set_size(self):
        if self.shoulder_length <= 42 and self.height <= 160:
            self.size = "Small"
        elif 43 <= self.shoulder_length <= 48 and 161 <= self.height <= 175:
            self.size = "Medium"
        elif self.shoulder_length >= 49 and self.height >= 176:
            self.size = "Large"
        else:
            self.size = "Error"

    def _set_full_name(self):
        self.full_name = f"{self.first_name} {self.middle_name} {self.last_name}"
        if self.suffix:
            full_name += f" {self.suffix}"
        return self.full_name
   
    def save(self, *args, **kwargs):
        self._set_size()
        self._set_full_name()
        super().save(*args, **kwargs)

class Measurement(models.Model):
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE, related_name='measurement')
    shirt_length = models.FloatField(null=True, blank=True)
    chest = models.FloatField(null=True, blank=True)
    shoulder = models.FloatField(null=True, blank=True)
    sleeve_length = models.FloatField(null=True, blank=True)
    cuff = models.FloatField(null=True, blank=True)
    round_sleeve = models.FloatField(null=True, blank=True)
    neck = models.FloatField(null=True, blank=True)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Measurement of {self.customer}"

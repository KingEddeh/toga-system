from django.db import models
from apps.customer.models import Customer
from apps.university_info.models import Course
from apps.inventory.models import Product

class Bundle(models.Model):
    product = models.ManyToManyField(Product, related_name='bundles')
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    discount = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, blank=True, null=True, on_delete=models.PROTECT)
    subtotal = models.FloatField()
    tax = models.FloatField()
    total = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.customer}'s order"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, blank=True, null=True, on_delete=models.CASCADE)
    bundle = models.ForeignKey(Bundle, blank=True, null=True, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    discount = models.FloatField(blank=True, null=True)
    total_price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

class Rental(models.Model):
    order_item = models.ForeignKey(OrderItem, on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    course = models.ForeignKey(Course, on_delete=models.PROTECT)
    date_rented = models.DateTimeField(auto_now_add=True)
    date_due = models.DateTimeField()
    status = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Payment(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    paid_amount = models.FloatField()
    status = models.Choices(STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.transaction.customer.first_name} {self.transaction.customer.last_name}'s payment"

class PaymentTransaction(models.Model):
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
    payment_methods = [
        ('cash', 'Cash'),
        ('ewallet', 'E-Wallet'),
        ('bank_transfer', 'Bank Transfer'),
        ('credit_card', 'Credit Card'),
        ('debit_card', 'Debit Card'),
        ('other', 'Other'),
    ]
    method = models.Choices(payment_methods)
    amount = models.FloatField()
    proof = models.ImageField(upload_to='proofs/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer.first_name} {self.customer.last_name}'s transaction"
from django.db import models

class InventoryTransaction(models.Model):
    inventory = models.ForeignKey('Inventory', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    transaction_date = models.DateTimeField(auto_now_add=True)
    TRANSACTION_TYPES = [
        ('SALE', 'Sale'),
        ('IN', 'In'),
        ('OUT', 'Out'),
        ('TRANSFER', 'Transfer'),
        ('ADJUST', 'Adjustment'),
    ]
    transaction_type = models.Choices(TRANSACTION_TYPES)
    quantity = models.IntegerField()
    reference = models.CharField(max_length=200)
    notes = models.TextField()

class Inventory(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    current_stock = models.IntegerField()
    reorder_level = models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    stock = models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Category(models.Model):
    product = models.ManyToManyField('Product', related_name='categories')
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class Supplier(models.Model):
    product = models.ManyToManyField('Product', related_name='categories')
    name = models.CharField(max_length=200)
    contact_person = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    address = models.TextField()
    note = models.TextField()

    def __str__(self):
        return self.name
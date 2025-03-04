from django.db import models

class GownPart(models.Model):
    name = models.CharField(max_length=50, choices=[('Cap', 'Cap'), ('Hood', 'Hood'), ('Tassel', 'Tassel'), ('Gown', 'Gown')])

    def __str__(self):
        return self.name

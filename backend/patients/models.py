from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=100)
    animal_type = models.CharField(max_length=50, choices=[
        ('cat', 'Chat'),
        ('dog', 'Chien'),
        ('rabbit', 'Lapin'),
    ])
    owner = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.animal_type}) - {self.owner}"
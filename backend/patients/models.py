from django.db import models

class Patient(models.Model):
    ANIMAL_TYPES = (
        ('chat', 'Chat'),
        ('chien', 'Chien'),
        ('lapin', 'Lapin'),
    )
    SEX_CHOICES = (
        ('M', 'Mâle'),
        ('F', 'Femelle'),
    )

    name = models.CharField(max_length=100)
    animal_type = models.CharField(max_length=20, choices=ANIMAL_TYPES)
    breed = models.CharField(max_length=100)
    birth_date = models.DateField(null=True, blank=True)  # Nullable
    weight = models.FloatField()
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    owner = models.ForeignKey('owners.Owner', on_delete=models.CASCADE, related_name='patients')

    def __str__(self):
        return self.name
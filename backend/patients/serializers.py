from rest_framework import serializers
from .models import Patient
from owners.serializers import OwnerSerializer

class PatientSerializer(serializers.ModelSerializer):
    owner_details = OwnerSerializer(source='owner', read_only=True)

    class Meta:
        model = Patient
        fields = ['id', 'name', 'animal_type', 'breed', 'birth_date', 'weight', 'sex', 'owner', 'owner_details']
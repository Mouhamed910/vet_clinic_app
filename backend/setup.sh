#!/bin/bash

# Créer l'environnement virtuel s'il n'existe pas
if [ ! -d "venv" ]; then
    python -m venv venv
fi

# Activer l'environnement virtuel
source venv/bin/activate

# Installer les dépendances
pip install -r requirements.txt

# Appliquer les migrations
python manage.py makemigrations
python manage.py migrate

# Créer un superutilisateur si nécessaire
python manage.py createsuperuser

echo "Configuration terminée !" 
from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import PersonaModel

class PersonasSerializer(serializers.ModelSerializer):
    #si el serializado es correspondiente a un modelo entonces tendremos que pasar su metadata indicando a que modelo corresponde
    class Meta:
        
        model=PersonaModel
        #fields -> indica que columnas (atributos) va a utilizar de ese modelo este serializador, si queremos que uso todos entonces pondremos '__all__', sin embargo si queremos que solamente use determinadas columnas seria asi: ['personaNombre', 'personaCorreo']
        fields='__all__'
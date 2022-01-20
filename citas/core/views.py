#from django.shortcuts import render

# Create your views here.

from rest_framework.generics import CreateAPIView
from .serializers import PersonasSerializer
from rest_framework.response import Response


class PersonasController(CreateAPIView):
    #serializer_class sera el encargado de modelar la informaci´+on que nos llega a nuestro backend y a su vez de formatear la informacion para que pueda ser enviada al front
    serializer_class=PersonasSerializer
    def post(self, request):
        print(request)
        """Se Ejecutara todo lo relacionado con el metodo POST de este controlador"""
        return Response(data='Hola Amigos')
from distutils.command.upload import upload
from enum import unique
from django.db import models

# Create your models here.


class PersonaModel(models.Model):

    opcionesEstadoCivil = [
        ('SOLTERO', 'SOLTERO'),
        ('CASADO', 'CASADO'),
        ('VIUDO', 'VIUDO'), 
        ('DIVORCIADO', 'DIVORCIADO'),
        ('COMPLICADO', 'COMPLICADO')]

    personaId = models.AutoField(
        primary_key=True, # indica que esta será la primary key
        unique=True,  # no puede tener valor repetidos
        null=False,  # no puede tener valores nulos
        db_column='id') # ubicar en la BS id
    
    personaNombre = models.CharField(
        max_length=50,
        unique=False,
        null=False,
        db_column='nombre'
    )

    personaApellido = models.CharField(
        max_length=50,
        unique=False,
        null=False,
        db_column= 'apellido'
    )

    personaEmail = models.EmailField(
        max_length=50,
        db_column='email',
        null=False,
        unique=True
    )

    personaFechaNacimiento = models.DateField(
        db_column='fec_nac',
    )

    personaEstadoCivil = models.CharField(
        choices=opcionesEstadoCivil,
        db_column='estado_civil',
        default='NO_ESPECIFICA' #si no proporciona un valor inicial, entonces este sera este valor
    )
    #ImagenField -> sirve para almacenar imagenes PERO solamente guardara en la bd su ubicacion del archivo y el archivo como tal lo guardara en el proyecto

    personaFoto = models.ImageField(
        db_colunm ='foto',
        upload_to = 'personas/', # es la carpeta donde se almacenara estos archivos dentro del proyecto
        null=True
    )


    class Meta:
        #sirve para pasar metadata al padre, al a confifuracion de modelo (model)
        db_table='personas', #modificaremos el nombre con e4l que se guardará en la BD
        ordering=['email', 'apellido'] # asc SELCT .....ORDER BY email DESC, apellido ASC
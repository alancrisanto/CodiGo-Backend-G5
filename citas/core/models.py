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
        default='NO_ESPECIFICA', #si no proporciona un valor inicial, entonces este sera este valor
        max_length=50
    )
    #ImagenField -> sirve para almacenar imagenes PERO solamente guardara en la bd su ubicacion del archivo y el archivo como tal lo guardara en el proyecto

    personaFoto = models.ImageField(
        db_column ='foto',
        upload_to = 'personas/', # es la carpeta donde se almacenara estos archivos dentro del proyecto
        null=True
    )


    class Meta:
        #sirve para pasar metadata al padre, al a confifuracion de modelo (model)
        db_table='personas' #modificaremos el nombre con e4l que se guardará en la BD
        #ordering=['email', 'apellido'] # asc SELCT .....ORDER BY email DESC, apellido ASC
        #index_together= []
        #unique_together = ['nombre', 'email' ] # para crear una clausula única e irrepetible entroe dos o mas columnas

    
class CitaModel(models.Model):


    opcionesEstado = [
        ('ACTIVA','ACTIVA'),
        ('CANCELADA','CANCELADA'),
        ('POSPUESTA','POSPUESTA'),
    ]
    #un autofield vendria a ser un campo entero autoincrementable
    # NOTA: solamente puede haber como máximo un autofield por tabla

    citaId = models.AutoField(
        primary_key=True,
        unique= True,
        db_column='id'
    )

    citaDescripcion = models.TextField(
        db_column='descripcion',
        null=False
    )

    citaFecha = models.DateTimeField(
        db_column='fecha',
        null=False
    )

    citaLatitud = models.FloatField(
        db_column='latitud',
        null=False
    )

    citaLongitud = models.FloatField(
        db_column='longitud',
        null=False
    )

    citaEstado = models.CharField(
        choices=opcionesEstado,
        db_column='estado',
        null=False,
        max_length=50
    )

    #campos que registran la fecha de manera automatica cuando se crea un nuevo registro y cuando se actualiza un registro -> campos de auditoria o audit fields

    createAt = models.DateTimeField(
        auto_now_add=True, # agarrara la hora y fecha actual de la bd y pondra ese valor en este campor de manera automatica cuando se cree un nuevo registro
        db_column='created_at'
    )

    updateAt = models.DateTimeField(
        auto_now=True, # modificara el valor cada vez que se haga una modificacion en alguna columna del registro, lo que sea y le modificara con su valor actual de la hora y fecha de la bd
        db_column='updated_at'
    )

    #Ahora se crean las relaciones
    #Que va a suceder cuando se elimina al padre(citador)
    #CASCADE -> es que primero se elimina el citador y luego se eliminas sus citas
    #PROTECT -> protegerá la eliminacion e indicar que no se puede por lo que manualmente tendrmos que eliminas las citas para luego eliminar al citador
    #SET_NULL ->  eliminar a la persona y en su citas pondra el valor de null
    #DO_NOTHING -> permite la eliminacion pero no hace nada en la columna fk, esto generara una mala integridad de los datos ya que tendremos informacion apuntando  personas que no existe
    #RESTRICT -> no permite la eliminacion como el PROTECT pero lanzara un error de RestrictedError

    citador = models.ForeignKey(
        to=PersonaModel, 
        db_column='citador_id',
        on_delete=models.PROTECT,
        related_name='personaCitas'
        )

    citado = models.ForeignKey(
        to=PersonaModel, 
        db_column='citado_id',
        on_delete=models.PROTECT,
        related_name='personaCitadas'
        )

    class Meta:
        # la tabla se llame citas
        # la fecha debe ser unica en citador
        #la fecha debe de ser unica con el citado
        # ordenamiento sea por la fecha proxima (desc)
        db_table='citas'
        unique_together=[['citaFecha','citador' ],['citaFecha','citado']]
        ordering= ['-citaFecha']
        

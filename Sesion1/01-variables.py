# variable númerica
numero = 0
numero2 = 10.5


# variables de texto o string
nombre = "Eduardo"
apellido = 'Ramiro'

html="""<html>
<p>
</p>"""

html='''<html>
<p>
</p>'''

print("holaa :)")
print(type(nombre))
print(type(numero))

soltero = True
calor = False
print(type(soltero))

# variables de varios valores

edades = [10, 12, 40, 60, "Alan", 12.4, False, [1, 2]]

print(type(edades))
print(edades[0])
print(edades[-1])
print(edades[2:4])
print(edades[-5:-1])
print(edades[:-1])
print(edades[1:-1])

# JSON = diccionario

curso = {
    "nombre": "Backend",
    "dificultad":"dificil",
    "skills": [
        {
            "nombre": "Base de datos",
            "nivel": "Intermedio"
        },
        {
            "nombre": "ORM",
            "nivel": "Avanzado"
        }
    ]
}

# quiero nivel del skill ORM

print(curso["skills"][1]["nombre"])

personas = [{
    'nombre': 'Eduardo',
    'nacionalidad': 'peruano',
    'hobbies':[
        {
            'nombre': 'Volar drones',
            'experiencia': '2 años'
        },{
            'nombre':'Programar',
            'experiencia': '1 mes'
        }
    ]
},{
    'nombre': 'Juliana',
    'nacionalidad': 'colombiana',
    'hobbies':[
        {
            'nombre': 'Montar bici',
            'experiencia': '4 años'
        },{
            'nombre':'Bases de datos',
            'experiencia': '8 mes'
        }
    ]
}]

# Nacionalidad 1ra persona

print(personas[0]["nacionalidad"])

# Hobbies 2da persona

print(personas[1]["hobbies"])
print(personas[1]["hobbies"][0]["nombre"])
print(personas[1]["hobbies"][1]["nombre"])

# Experiencia de hobbie de la primera persona

print(personas[0]["hobbies"][1]["experiencia"])

del personas[0]

print(personas)


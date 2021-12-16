# Listas

dias = ["Lunes", "Martes", "Miercoles"]

otros_dias = ["Sabado", "Domingo"]

dias_semana = dias + otros_dias

print(dias_semana)



dias.append("Jueves")

print(dias)

dias.remove("Martes")

print(dias)

dias.clear()

print(dias)

# Variables mutables / immutables

lista1 = [1, 2, 3, 4, 5]
lista2 = lista1
lista3 = lista1[:]  # Copia los datos mas no la posición

lista1[0] = 50
print("La lista 1 es", lista1)
print("La lista 2 es", lista2)
print("La lista 3 es", lista3)


# Tuplas

# Coleccion igual que la lista, con diferencia que la tupla no se puede modificar sus valores unas vez creada
alumnos = ("Eduardo", "Pedro", "Ana", "Roberto")
# alumnos.remove("Eduardo")

# Se usa para almacenar valores que nunca van a cambiar su contenido
CONFIGURACION = (
    {
        "Nombre": "API_KEY",
        "Valor": "xxxxxx.xxxx.xxx"
    },
    {
        "Nombre": "Sendgrid",
        "Valor": "asasasasasasasasass"
    }
)

CONFIGURACION = ("asdasdasdasdasd", "jhdjededld", "123456789cdsre8")

# Si dentro de la tupla hay otro tipo coleccion de datos(Diccionario, lista), si se va a poder modificar su valor
# Si tiene algun dato primitivo (STR, INT, FLOAT) no podrá modificar

# CONFIGURACION[0]["Nombre"] = "xD"
print(CONFIGURACION[0])
print(CONFIGURACION)


# Conjuntos
# Es la unica coleccion de datos DESORDENADA

color = {"rojo", "verde", "amarillo", "azul"}
color.add("mostaza")
print(color)
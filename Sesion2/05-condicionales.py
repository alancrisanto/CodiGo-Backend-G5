# Condicionales

edad = 16
edad_min = 18

if edad >= edad_min:
    print("Eres mayor de edad, puedes pasar")
elif edad >15:
    print("Puedes ir a los quinceañeros")
elif edad >10:
    print("puedes ir al zoo")
else:
    print("Eres menor de edad no puedes ingresar")

print("Yo siempre me ejecuto")

# Operador ternario

resultado = "eres mayor de edad" if edad >= edad_min else "eres menor de edad"
print(resultado)

number = 22

if number % 2 == 0:
    print("par")
else: 
    print("impar")

par_impar = "par" if number % 2 == 0 else "impar"

print(par_impar)

persona = {
    "nombre": "Raul",
    "nacionalidad": "Peruana",
    "sexo": "M"
}

if persona["nombre"] == "Raul" and persona["nacionalidad"] == "Peruana":
    print(f"Si la persona es",  persona["nombre"], "y su nacionalidad es", persona["nacionalidad"])
else:
    print(f"no la persona es  {persona['nombre']}, y su nacionalidad es {persona['nacionalidad']}")

# for 
# Sirve para un numero limitado de veces y tiene un inicio o un numero de arranque y un fin
# generalmente se usa para colecciones de dator ORDENADOS

meses = ["enero", "febrero", "marzo", "abril"]

for mes in meses:
    print(mes)

#  Cuántas personas tienen mas de 20 años >2
# Qué personas tienen menos de 20 años : rpta las personas son nicolas, guillermo
# hints: Crear una lista donde se almacenen los nombres de las personas que tienen menos de 20, un contador para las personas de mas de 20

personas = [
    {
    'nombre': 'Adriana',
    'edad': 25
    },
    {
    'nombre': 'Nicolas',
    'edad': 15
    },
    {
    'nombre': 'Maria',
    'edad': 23
    },
    {
    'nombre': 'Guillermo',
    'edad': 10
    }
]

edades = []
nombres_menor_20 = []
count = 0

for edad in personas:

    edades.append(edad["edad"])

    if edad["edad"] <= 20:
        nombres_menor_20.append(edad["nombre"])


for i in edades:
    if i >= 20:
        count += 1

print(f"Hay {count} personas mayores de 20 años")



for j in range(len(nombres_menor_20)):
    print(f"Las personas menores de 20 son {nombres_menor_20[j]} y {nombres_menor_20[j + 1]}  ")
    break

#Otra solución más efectiva

personas_mas_de_20 = 0  #contador
personas_menos_de_20 = "Las personas son "

for persona in personas:
    if(persona["edad"] >20):
        personas_mas_de_20 +=1
    else:
        personas_menos_de_20 += persona["nombre"] + " "

print("Hay", personas_mas_de_20, "que tienen mas de 20")
print(personas_menos_de_20)
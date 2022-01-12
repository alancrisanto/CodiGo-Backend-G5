from faker import Faker
from faker.providers import person, internet
import random

obj_faker = Faker()
obj_faker.add_provider(person)
obj_faker.add_provider(internet)

# print(obj_faker.last_name())
# print(obj_faker.free_email())
# print(obj_faker.name())

cursos = ['COMUNICACION', 'CTA', 'INGLES', 'FRENCH']
alumnos = []

# for i in cursos:
#     print(f"INSERT INTO CURSOS (nombre) values ('{i}')")

# for alumnos in range(100):
#     nombre = (obj_faker.name())
#     apellido = obj_faker.last_name()
#     correo = obj_faker.free_email()
#     print(
#         f"INSERT INTO ALUMNOS (nombre, apellido, correo) VALUES ('{nombre}', '{apellido}', '{correo}')")

# hacer un for 200 veces, encontrar un número random entre 1 y 100 (que seria el alumnos)
# y un numero random entre 1 y 4 (que seria los cursos)
# 50 2 (0)
# 75 3 (1)
# 80 2 (2)
# 50 2 (3) repetido
# si se vuelve a repetir mismo alumno con mismo curso, OBVIAR, pero no incrementar el indice del for

# solucion profesor
data = [[1, 3], [10, 2], [32, 1], [55, 4], [86, 3], [10, 1]]
x = 0
while x < 200:
    curso = obj_faker.random_int(min=1, max=4)
    alumno = obj_faker.random_int(min=1, max=99)
    if [alumno, curso] not in data:
        x += 1
        print(
            f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES({alumno}, {curso});')
        data.append([alumno, curso])

list = []

# mi solucion

# for i in range(100):
#     a = (random.randint(1, 100))
#     b = random.randint(1, 4)
#     c = a, b
#     if c not in list:
#         list.append(c)

# print(list)
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(1,3);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(10,1);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(10,2);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(32,1);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(55,4);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(86,3);')

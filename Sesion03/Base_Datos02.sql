-- 1 Todas los alumnos que comiencen con la letra A y tenga una C
SELECT * FROM ALUMNOS;
SELECT * FROM ALUMNOS WHERE NOMBRE LIKE 'A%C%';
-- 2 Mostrar cuantos alumnos tiene como correo @hotmail.com
SELECT COUNT(*) CONTEO, 'ALUMNOS' TEXTO 
FROM ALUMNOS WHERE CORREO LIKE '%@HOTMAIL.COM';
-- 3 Traer todos los alumnos que lleven comunicacion (id=1)
SELECT * FROM ALUMNOS INNER JOIN ALUMNOS_CURSOS AS AC ON AC.ID = AC.ALUMNO_ID
WHERE CURSOS_ID = 1;
-- 4 contabilizar cuantos alumnos hay de cada curso de mayor a menor

-- 10 comunicacion
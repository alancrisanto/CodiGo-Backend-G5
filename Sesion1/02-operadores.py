numero1 = 10
numero2= 30

resultado = numero1 + numero2
print(resultado)
print("el resultado es {}".format(resultado))
print(f"el resultado es {resultado}")
# el número indica el orden en que deben imprimirse sin importar el orden en que escribe dentro de format
print("el resultado es {1} y nada mas {0}".format( numero1, resultado))

resultado = numero1 - numero2
resultado = numero1 * numero2
resultado = numero1 / numero2
print("{:.2f}".format(resultado))
print(f"{resultado:.2f}")

# modulo
resultado = numero1 % numero2
print(f"el modulo es {resultado}")

# cociente

resultado = numero1 // numero2
print(f"el cociente es {resultado}")

print(f"{10%2}")
print(f"{10//2}")

# exponente

resultado = numero1 ** numero2
print(resultado)
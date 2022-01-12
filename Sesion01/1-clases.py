class Vehiculo:
    ruedas = 4
    color = "azul"

vehiculo1 = Vehiculo()
vehiculo1.ruedas = 5
vehiculo1.procedencia = "Japon"
vehiculo2 = Vehiculo()

print(vehiculo1.ruedas)
print(vehiculo2.ruedas)
print(vehiculo1.procedencia)


class Vehiculo_constructor():

    def __init__(self, ruedas, color):
        self.color = color
        self.ruedas = ruedas

    def __str__(self):
        return "Esta es una instancia de vehiculo_constructor"

vehiculo3 = Vehiculo_constructor(4, "azul")
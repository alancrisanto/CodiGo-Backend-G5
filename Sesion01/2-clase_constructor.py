class Vehiculo:

    def __init__(self, color, modelo, traccion):
        self.modelo = modelo
        self.color = color
        self.traccion = traccion
        # encapsular atributo
        self.__velocidad = 0

    def acelerar(self):
        """Método que acelera el vehículo de 20 en 20"""
        self.__velocidad += 20
        return f"La velocidad actual es {self.__velocidad}km/h"

    def desacelerar(self):
        """Método que desacelera el vehículo"""
        self.__velocidad -= 20
        self.__prueba()
        return self.__velocidad

    def __prueba(self):
        """Método privado"""
        print("Esto no debería estar pasando")


vehiculo1 = Vehiculo("azul", "x3", "4x2")

print(vehiculo1.acelerar())
print(vehiculo1.acelerar())
print(vehiculo1.acelerar())
print(vehiculo1.desacelerar())

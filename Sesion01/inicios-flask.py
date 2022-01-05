from flask import Flask

# en python tenemos varias variables que son de uso propio de python no podemos modificar ni alterar
# __main__ > esta variable sirve para indicar si estamos en el archivo principal del proyecto

app = Flask(__name__)

#el decorador sirve para usar el método de una clase pero implementandolo en una función
@app.route('/') # <= este es el decorador
def inicio():
    return "Bienvenido a mi API"

@app.route("/bienvenida")
def bienvenida():
    return "Te doy la bienvenida a mi API"

@app.route("/bienvenida/home")
def bienvenido_home():
    return "Te doy la bienvenida a API Home extraño"

if __name__ == "__main__":

    app.run(debug=True)
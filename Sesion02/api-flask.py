from flask import Flask, request
from flask_cors import CORS
# Request da toda la informaciín del cliente

app = Flask(__name__)
# si solamente le pasamos la aplicacion o la instancia de flask habilitamos los CORS para todos los dominios y para todos los métodos
CORS(app=app)

mis_productos = [{
    "nombre": "Paneton con harto bromato",
    "precio": 17.38,
    "disponible": True,
    "fecha_vencimiento": "2022-01-30"
},
{
    "nombre": "Chocolate con harta azucar",
    "precio": 6.90,
    "disponible": False,
    "fecha_vencimiento": "2022-12-4"}]

@app.route("/", methods=["POST", "GET"])
def inicio():
    # Request.method > nos da el metodo que esta queriendo acceder el cliente
    print(request.method)

    if request.method == "POST":
        # request.get_json() > captura el json enviado por el cliente y lo convierte automáticamente a un diccionario para que python lo pueda entender

        print(request.get_json())

        data = request.get_json()

        if data.get("nombre"):  
            #Diferencia entre get y las llaves [] es que si en las llaves no existe arroja un error, en get returna en este caso necesito la información
            nombre = data.get("nombre")
            return "Hola, {}!".format(nombre)
        else:
            return "Necesita la información"
    elif request.method == "GET":
        return "Bievenido a mi API de Productos", 200


@app.route("/productos", methods=["GET", "POST"])

def productos():
    if request.method == "GET":
        return {
            "data": mis_productos,
            "message": "Los productos son:",
            "ok": True
        }
    elif request.method =="POST":
        data= request.get_json()
        mis_productos.append(data)
        return {
            "data" : data,
            "message": "Producto Agregado exitosamente",
            "ok": True
        }, 201

@app.route("/producto/<int:id>", methods=["GET"])  #<> indica que el id va a ser dinámico
def producto(id):  #el parámetro debe ser el mismo que he puesto arriba entre <>
    if request.method == "GET":
        
        if id < len(mis_productos):
            return{
                "data": mis_productos,
                "message": "Producto recibido",
                "ok": True
            }

        else:
            return "Producto no encontrado"

    elif request.method == "PUT":
        data = request.get_json()
        if id > len(mis_productos):
            mis_productos[id] = data # con eso sobreescribimos en esa posición con la nueva que nos envía el front
            return {
                "ok": True,
                "data": mis_productos,
                "message": "Producto actualizado exitosamente"
            }, 200
        else:
            return {
                "ok": False,
                "data": None,
                "message":"El producto con el id {} no existe".format(id)
            }

if __name__ == "__main__":
    app.run(debug=True)


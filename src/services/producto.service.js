import { Producto } from "../models/producto.model.js";

export class ProductoService {

    static async crear(data){
        try {
            //Metodo 1 de obtener la data
            const nuevoProducto = await Producto.create(data);
            

            // Metodo 2
            //primero creamos la instancia pero no se guarda en la bd
                //const instanciaNuevoProducto = new Producto(data)
            //una vez modificado algun valor previo recien guardamos
                //instanciaNuevoProducto.nombre = "random" + instanciaNuevoProducto.nombre;
            //el metodo save es asincrono y es el encargado de haer el guardado de la info en la BD
                //await instanciaNuevoProducto.save();

            //Metodo 3
            // si la insercion sera de uno o varios registros se podra utilizar el metodo insertMany y devolvera un array con todos los elementos con todos los elementos agregados a la bd
            // Producto.insertMany([
            //     {nombre: "Producto 1"},
            //     {nombre: "Producto 2"},
            //     {nombre: "Producto 3"},
            // ]);

            return nuevoProducto;

        } catch (e) {
            return {
                message: e.message,
            }
        }
    }
}
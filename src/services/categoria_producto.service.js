import {CategoriaProducto} from "../models/categoria.producto.model.js"
import { Categoria } from "../models/categoria.model.js"
import { Producto } from "../models/producto.model.js"


export class CategoriaProductoService {
    static async crear({categoriaId, productoId}){

        // validar que exista categoria
        const categoriaEncontrada = await Categoria.findById(categoriaId);
        // validar que exista producto
        const productoEncontrado = await Producto.findById(productoId);
        // validar que no exista ese registro previamente
        // !nombre es = a decir si no hay nombre o null o undefined
        if (!categoriaEncontrada || !productoEncontrado){
            return {
                message: "Categoria o Producto no encontrado"
            }
        }

        // validar que no exista ese registro previamente
        const registro = await CategoriaProducto.findOne({
            categoriaId,
            productoId
        });

        if (registro){
            return {
                message: "Relacion ya existe"
            }
        }
        // agregaremos ese registro a la bd

        const nuevoRegistro = await CategoriaProducto.create({categoriaId, productoId})

        //modificar en el producto y en la catregoria el arreglo de categoriaProductos

        await Categoria.updateOne(
            {_id: categoriaEncontrada._id},
            {
                categoriaProducto: [
                    ...categoriaEncontrada.categoriaProducto,
                    nuevoRegistro._id,
                ]
            }
        );

        await Producto.updateOne(
            {_id: productoEncontrado._id},
            {
                categoriaProducto: [
                    ...productoEncontrado.categoriaProducto,
                    nuevoRegistro._id,
                ]
            }
        );

        return nuevoRegistro;
    }
}
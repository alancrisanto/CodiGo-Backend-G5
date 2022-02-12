import { Categoria } from "../models/categorias.model.js";
import fs from 'fs';

export class ImagenService {
    static async subirImagen(id, nombreImagen){
        //buscar la categoria segun su id
        const categoriaEncontrada = await Categoria.findById(id).catch( async(error)=> {
            await fs.promises.unlink(nombreImagen)
            throw new Error('Categoria no existe')
        });
        // si no existe emitiremos un error
        if (!categoriaEncontrada) {
            //elimina un achivo permanentemente de nuestro servidor
            await fs.promises.unlink(nombreImagen)
            throw new Error('Categoria no existe')
        }
        //si existe actualizamos su campo categoriaImagen y le pondremos el valor de nombre Imagen
        const categoriaActualizada = await Categoria.findOneAndUpdate(
            {_id: id}, 
            {categoriaImagen: nombreImagen}, 
            {new: true}
        )
        return categoriaActualizada;
    }
}
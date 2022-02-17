import { Categoria } from "../models/categorias.model.js";
import fs from 'fs';

export class CategoriaService {
    static async crear(data){
        try {
            
            const nuevaCategoria = await Categoria.create(data);
            return nuevaCategoria
            
        } catch (error) {
            console.error(error);
        }
    }

    static async devolver(){
        const categorias = await Categoria.find();
        return categorias;
    }

    static async eliminar(id){
        try {

            const categoriaEncontrada = await Categoria.findById(id);

            if(categoriaEncontrada.categoriaImagen != undefined) {
                await fs.promises.unlink(categoriaEncontrada.categoriaImagen)
            }

            const categoriaEliminada = await Categoria.findByIdAndDelete(id);
            return categoriaEliminada

        } catch (error) {
            console.error(error)
        }
    }
}
import Prisma from "@prisma/client"
import {prisma} from "../prisma.js"
import {ArchivosService} from "../services/archivos.service.js"


export class ProductoService {
    static async crearProducto(data) {
        
        try {
            const nuevoProducto = await prisma.producto.create({data})
            console.log(nuevoProducto);
            return {content: nuevoProducto}
            
        } catch (error) {

            console.log(error);
            if (error instanceof Prisma.Prisma.PrismaClientKnownRequestError) {
                return {
                    message: "Error al crear el producto", 
                    content: error.message
                };
            }
        }
    }

    static async devolverProducto(id) {

        const producto = await prisma.producto.findUnique({
            where: {id: +id},
            include: {tipoProducto: true},
            rejectOnNotFound: false,
        })

        if(producto === undefined){
            return {
                message: `No existe el producto con el id ${id}`,
            }
        }

        const productoConImagen = {...producto, imagen: ArchivosService.devolverURL(producto.imagen)}
        return {
            productoConImagen,
        }
    }

    static async listarProductos(){
        const productos = await prisma.producto.findMany({
            include: {tipoProducto: true},
        })

        const productosIterados = productos.map((producto) => {
            return {
                ...producto,
                imagen: producto.imagen && ArchivosService.devolverURL(producto.imagen)
            }
        })

        return {productos: productosIterados};
    }

    static async eliminarProducto(id){

        const productoEncontrado = await prisma.producto.findUnique({
            where: {id},
            rejectOnNotFound: true,
            select: {imagen: true},
        });

        if (productoEncontrado.imagen){
            
            ArchivosService.eliminarArchivo(productoEncontrado.imagen);
        }


        const productoEliminado = await prisma.producto.delete({
            where: {id},
        })

        return {producto: productoEliminado};
    }
}
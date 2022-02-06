import {s3} from "../s3.js";
import {prisma} from "../prisma.js";

export class ArchivosService {
    static async crearArchivo(data) {

        //validar si el producto existe
        //prisma
        const productoEncontrado = await prisma.producto.findUnique({
            where: {id: data.productoId}, 
            select: {imagen: true},
            rejectOnNotFound: true,
        });

        //validar si ese producto no tiene imagen

        if (productoEncontrado.imagen !== null){

        // return indicando la respuesta o error
            return {
                message: "El producto ya tiene una imagen, primero eliminela y luego vuelva a crear el archivo",
            };
        }

        //si tiene imagen indicar que ya tiene una imagen previa

        //actualizar el producto en su columna imagen agregar el valor de la propiedad key
        
        const path = `archivos/productos/${data.productoId}`;

        const Key = `${path}/${data.filename}.${data.ext}`;

        const url = s3.getSignedUrl('putObject', {
            Key,
            ContentType: data.contentType,
            Bucket: process.env.AWS_BUCKET,
            Expires: +process.env.AWS_SIGNED_EXPIRES_IN
        });
        
        await prisma.producto.update({
            data: {imagen: Key},
            where: {id: data.productoId},
        })
        return url;
    }

    static devolverURL(path){
        
        return s3.getSignedUrl('getObject', {
            Key: path,
            Bucket: process.env.AWS_BUCKET,
            Expires: +process.env.AWS_SIGNED_EXPIRES_IN,
        });
    }

    static eliminarArchivo(path){
        s3.deleteObject({
            Bucket: process.env.AWS_BUCKET,
            Key: path,
        },
        (error, data)=> {
            if (error){
                console.log("el error es: ");
                console.log(error);
            }

            if (data) {
                console.log("la data es:")
                console.log(data)
            }
        })
    }
}
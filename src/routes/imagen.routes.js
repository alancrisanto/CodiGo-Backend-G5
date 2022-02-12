import {Router} from 'express';
import Multer from 'multer';
import { nanoid } from 'nanoid';
import { subirImagen } from '../controllers/imagen.controller.js';


export const imagenRouter = Router();

const almacenamiento = Multer.diskStorage({
    destination: 'src/media/',
    // esto nos permite cambiar el nombre con el cual se guardara el archivo en nuestro servidor
    filename: (req, archivo, callback) => {
        const id = nanoid(5)
        const nombre = archivo.originalname
        callback(null, id + nombre);
    }
})

const multerMiddleware = Multer({
    storage: almacenamiento, 
    limits: {fieldSize: 5*1024*1024}
});

//any: aceptara todos los archivos y mas de uno
//none: aceptara valores en formate texto (no aceptara archivos)
//array: (nombre_campo, limite) aceptara varios achivos definidos mediante un campo y opcionalmente un limite de cuantos archivos queremos recibir
// fields: acepta una mescla de archivos especificados  por los campos que vamos a recibir
//single: (campo) acepta un solo archivo mediante esa llave
//Nota: todos los archivos se alamcenaran en el request(req), pero en el caso de single sera req.file, mientras que en los demas será req.files
imagenRouter.post(
    "/subir-imagen/:id",
    multerMiddleware.single('imagen'),
    subirImagen,
);
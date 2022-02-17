import express, {json} from "express";
import mongoose from "mongoose";
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import sgMail from '@sendgrid/mail'

import { categoriaRouter } from "./routes/categorias.routes.js";
import { imagenRouter } from "./routes/imagen.routes.js";
import { usuarioRouter } from "./routes/usuario.routes.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//const direccion_proyecto buscara la ubicacion de nuestro proyecto en el servidor (maquina)
const direccion_proyecto = dirname(fileURLToPath(import.meta.url))
//console.log(direccion_proyecto)
const app = express();
app.use(json())

const PORT = process.env.PORT ?? 3000;

app.use(categoriaRouter);
app.use(imagenRouter)
app.use(usuarioRouter)
//exponer los archivos que quieron que sean accesibles desde fuera del servidor

//servira para cuando nuestra carpete que queramos exponer este afuera del proyecto
app.use('src/media', express.static(direccion_proyecto + '/media'));


app.listen(PORT, async () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);

    try {
        const respuesta = await mongoose.connect(process.env.MONGODB);
        console.log("Se conecto a la base de datos")
    } catch (error) {
        console.log(error);
    }
});
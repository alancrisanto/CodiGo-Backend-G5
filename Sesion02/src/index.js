import express, { json } from "express";
import { categoriaRouter } from "./routes/categoria.route.js";
const app = express();

//nulish coalesing operator ??
// validad el contenido de la izquierda y si es nulo o undefinded entonces procedera a tomar el valor de la derecha
const PORT = process.env.PORT ?? 3000;

// declarar el tipo de contenido que va a recibir
app.use(json());
//Declaramos las rutas del nuestro archivo routes
app.use(categoriaRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente  en el puerto ${PORT}`)
});


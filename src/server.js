import express, {json} from 'express';
import mongoose from 'mongoose';
import mercadopago from 'mercadopago';

import { productoRouter } from './routes/producto.routes.js';
import { categoriaRouter } from './routes/categoria.routes.js';
import { categoriaProductoRouter } from './routes/categoria_producto.routes.js';

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
    integrator_id: process.env.INTEGRATOR_ID_MP,
})

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(json());

// Rutas

app.use(productoRouter);
app.use(categoriaRouter);
app.use(categoriaProductoRouter)

app.listen(PORT, async () => {
    console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
    
    try {

        await mongoose.connect(
            process.env.NODE_ENV === 'production'
            ? process.env.DATABASE_URL  // conexion en la nube Atlas
            : process.env.DATABASE_URL_DEV) //conexion local
        console.log("BD sincronizada exitosamente")
        
    } catch (error) {
        console.log("Error al conectarse a la base de datos 🚩")
    }
});
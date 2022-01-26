import express, {json} from 'express'; // para indicar que estamos trabajando en forma de modulo agregar al json "type": "module",
import cors from "cors";
//const express = require("express"); manera antigua de importar modulo 
const productos = [{
    nombre: "leche de almendras",
    precio: 9.5,
    estado: true
}];
const app = express();
app.use(json());

app.use(cors()
//    {
//    methods: ["GET", "POST"],
//    origin: "https://www.mipagina.com"
//}
);
const port = 3000;

app.get('/', (req, res) => {
    // req -> es la informacion que viene del cliente
    // res -> es la respuesta que le dare al cliente
    res.status(200).json({
        message: "Peticion realizada correctamente",
    });
});

app.post("/producto", (req, res) => {
    console.log(req.body);
    if (req.body) {
        productos.push(req.body);
        res.status(201).json({
            message: "producto agregado exitosamente",
            producto: req.body,
        });
    } else {
        res.status(400).json({
            message: "Informacion incorrecta",
        })
    }
});

// mediante el endpoint /productos devolver todos los productos en el siguiente formato:
// {
// message: "los productos son:",
//content: [...]
//}

app.get("/productos", (req, res) => {
    res.status(201).json({
        message: "los productos son:",
        content: productos
    });
});

// se puede usar para la misma ruta lo siguiente:
app.route('/producto/:id')
.get((req, res) =>{
    const {id} = req.params 
    // si quiero cambiar el nombre de la variable por destructuracion puedo usar const {id: nombre_variable} = req.params
    if (productos[id-1]){
        return res.status(200).json({
            message: "producto encontrado",
            producto: productos[id-1]
        })
    }else{
        return res.status(400).json({
            message: "Producto no encontrado",
            content: null
        })
    }
})
.put((req, res) => {
    const {id} = req.params 
    // si quiero cambiar el nombre de la variable por destructuracion puedo usar const {id: nombre_variable} = req.params
    if (productos[id-1]){
        productos[id -1] = req.body;

        return res.status(200).json({
            message: "producto actualizado correctamente",
            producto: productos[id-1]
        })
    }else{
        return res.status(400).json({
            message: "Producto no existe",
            content: null
        })
    }
})
.delete((req, res) => {
    const { id } = req.params;
    if (productos[id - 1]) {
        const producto = productos[id - 1];

        productos.splice(id - 1, 1);

        return res.status(200).json({
        message: "Producto eliminado exitosamente",
        content: producto,
    });
    } else {
        return res.status(400).json({
            message: "Producto no existe",
            content: null,
        });
    }
})



// se mantendra escuchando las consultas realizadas a este servidro mediante el puerti definido
app.listen(port, () => {
    // Esto sucedera cuando se levante el servidor de express
    console.log(`Servidor levantado exitosamente! ${port}`)
});


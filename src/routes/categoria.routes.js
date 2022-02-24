import { Router } from "express";
import { crearCategoria } from "../controller/categoria.controller.js";


export const categoriaRouter = Router();

categoriaRouter.route("/categoria")
    .post(crearCategoria)
    .get()
    //hacer el get de todas las categorias ordenandas alfabeticamente por el nombre de maneras ascendente
    // No USAR MAP o FILTER, usar los ordenamientos de mongoose
    .put()//Hacer el put para actualizar categoria 

categoriaRouter.route("/categoria/:id")
    .get()
    // traer la categoria con todos sus productos
    //{
    //     nombre: "cate1",
    //     image: "#00000",
    //     productos: [
    //         {
    //             id: '123',
    //             nonbre: 'prod2',
    //             precio: ''
    //         }
    //     ]
    // }
import { Router } from "express";
import { crearTipoProducto } from "../controllers/tipoProductoController.js";

export const tipoProductoRouter = Router();

tipoProductoRouter.route("/tipo-producto").post(crearTipoProducto);


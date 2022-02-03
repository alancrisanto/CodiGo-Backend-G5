import { TipoProductoService } from "../services/tipoProducto.service.js";
import jwt from "jsonwebtoken";

export async function crearTipoProducto (req, res) {

    console.log(req.headers)
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(403).json({
            message: "No tienes los privilegios suficientes para realizar esta acción 🚫",
        });
    }

    // se desea solamente la token

    const token = authorization.split(" ")[1];

    try {
        const data = jwt.verify(token, process.env.JWR_SECRET);
        console.log(data);
        const resultado = await TipoProductoService.crearTipoProducto({

            nombreProducto: "",
            usuarioId: 1,
        });
        return res.json(resultado);
        } catch (error) {

            console.log(error);
            return res.status(403).json({
                message: "Token invalida",
        });
    }
}
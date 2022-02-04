import { TipoProductoService } from "../services/tipoProducto.service.js";
import { tipoProductoDto } from "../services/dtos/request/tipoProducto.dto.js";

export async function crearTipoProducto (req, res) {

    console.log(req.user);
    
    try {
        const {nombre} = tipoProductoDto(req.body);

        const resultado = await TipoProductoService.crearTipoProducto({nombre});
        return res.status(201).json(resultado)

    } catch (error) {
        return res.status(400).json({
            error: error.message,
            message: "Error al crear tipo producto",
        })
    }
}

export async function listarTipoProductos(req, res) {
    const resultado = await TipoProductoService.listarTipoProducto();

    return res.json(resultado)
}
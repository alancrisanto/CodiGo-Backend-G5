import { prisma } from "../prisma.js";

export class TipoProductoService {
    static async crearTipoProducto({ nombreProducto, usuarioId }) {
        const usuarioEncontrado = await prisma.usuario.findUnique ( {
            where: {id: usuarioId},
        });
        console.log(usuarioEncontrado);
        return { message: "ok" }
    }
}
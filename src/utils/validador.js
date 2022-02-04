import jwt from 'jsonwebtoken';
import { prisma } from '../prisma.js';

export function verificarToken (token) {
    try {
        const playload = jwt.verify(token, process.env.JWT_SECRET);
        return playload
    } catch (error) {
        return error
    }
}

export async function validarUsuario (req, res, next) {
    //middleware
    // es un intermediario entre el cliente y el controlador final
    if (!req.headers.authorization) {
        return res.status(400).json({
            messaage: "Se necesita una token par realizar esta solicitud",
        })
    }

    const token = req.headers.authorization.split(" ")[1];

    const resultado = verificarToken(token)

    if (resultado instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({
            message: "La token es invalidad, intente nuevamente",
            razon: resultado.message,
        })
    }
    
    console.log(resultado);
    
    const usuario = await prisma.usuario.findUnique({
        where: {id: resultado.id},
        select: {correo: true, id: true},
    });

    req.user = usuario;
    next();
}


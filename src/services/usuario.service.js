import { Usuario } from "../models/usuarios.model.js";
import { hashSync } from "bcrypt";
import cryptojs from "crypto-js";
import sgMail from '@sendgrid/mail'


export class UsuarioService {
    static async registro (data) {
        try {
            const password = hashSync(data.password, 10);

            const usuarioCreado = await Usuario.create({...data, password})
            return  usuarioCreado;
            
        } catch (error) {
            return {
                message: "Error al crear el usuario",
                content: error.message
            }
        }
    }

    static async olvidePassword (correo){

        const usuarioEcontrado = await Usuario.findOne({usuarioCorreo: correo});

        if(usuarioEcontrado) {
            //aca enviaremos el correo
            const token = cryptojs.AES.encrypt(
                JSON.stringify({
                    correo: usuarioEcontrado.usuarioCorreo,
                    nombre: usuarioEcontrado.usuarioNombre,
            }),
            process.env.SECRET_CRYPT_PASSWORD
            ).toString();

            console.log(token)

            const tokenDecodificada = JSON.parse (cryptojs.AES.decrypt(token, process.env.SECRET_CRYPT_PASSWORD).toString(
                cryptojs.enc.Utf8
            ));

            console.log(tokenDecodificada)

            const respuesta = await sgMail.send({
                from: 'alanvcrisanto@gmail.com',
                text: `Ups parece que has olvidado tu contraseña, ingresa a este link para restaurar la contraseña http://localhost:3000?token${token}`,
                subject: "Restauracion de la contraseña",
                to: usuarioEcontrado.usuarioCorreo,
                html: 
                `<h2>Hola has olvidado la contraseña</h2>
                <p>Ingresa al siguiente link para restaurar la contraseña</p><code>http://localhost:3000?token${token}</code>
                `,
            })
            console.log(respuesta)
        }
        console.log(usuarioEcontrado);
    }
}
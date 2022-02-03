import {hashSync} from "bcrypt";


export default async(prisma) => {

    const password = hashSync('Welcome123!', 10)

    await prisma.usuario.upsert({
        create: {
            nombre: 'Alan',
            correo: 'alanvcrisanto@gmail.com',
            password: password,
            tipoUsuario: 'Admin',
        },
        update: {
            password: password,
        },
        where: {
            correo: 'alanvcrisanto@gmail.com',
        },
    });
};
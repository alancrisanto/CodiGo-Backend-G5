export default async(prisma) => {

    await prisma.usuario.upset({
        create: {
            nombre: 'Alan',
            correo: 'alanvcrisanto@gmail.com',
            password: '123456',
            tipoUsuario: 'Admin',
        },
        update: {},
        where: {
            correo: 'alanvcrisanto@gmail.com',
        },
    });
};
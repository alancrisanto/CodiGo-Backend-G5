-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('Admin', 'Cliente', 'SuperAdmin');

-- CreateEnum
CREATE TYPE "PermisoAccion" AS ENUM ('Create', 'Delete', 'Read', 'Update');

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "precio" INTEGER NOT NULL,
    "imagen" TEXT NOT NULL,
    "tipo_producto_id" INTEGER NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "tipo_productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permiso" (
    "id" SERIAL NOT NULL,
    "tipo_usuario" "TipoUsuario" NOT NULL,
    "accion" "PermisoAccion" NOT NULL,
    "tabla" TEXT NOT NULL,

    CONSTRAINT "Permiso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipo_usuario" "TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "productos_id_key" ON "productos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_productos_id_key" ON "tipo_productos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_productos_nombre_key" ON "tipo_productos"("nombre");

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_tipo_producto_id_fkey" FOREIGN KEY ("tipo_producto_id") REFERENCES "tipo_productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

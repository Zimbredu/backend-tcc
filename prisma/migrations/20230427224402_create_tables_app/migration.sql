/*
  Warnings:

  - Added the required column `password` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "catergoriaservicos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catergoriaservicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "id_Categoria" TEXT NOT NULL,

    CONSTRAINT "servicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requisicaoservicos" (
    "id" TEXT NOT NULL,
    "userService" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requisicaoservicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itemservicos" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "id_RequisicaoServico" TEXT NOT NULL,
    "id_Servico" TEXT NOT NULL,

    CONSTRAINT "itemservicos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servicos" ADD CONSTRAINT "servicos_id_Categoria_fkey" FOREIGN KEY ("id_Categoria") REFERENCES "catergoriaservicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemservicos" ADD CONSTRAINT "itemservicos_id_RequisicaoServico_fkey" FOREIGN KEY ("id_RequisicaoServico") REFERENCES "requisicaoservicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemservicos" ADD CONSTRAINT "itemservicos_id_Servico_fkey" FOREIGN KEY ("id_Servico") REFERENCES "servicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

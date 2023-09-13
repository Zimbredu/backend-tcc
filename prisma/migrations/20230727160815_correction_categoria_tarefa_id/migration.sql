/*
  Warnings:

  - You are about to drop the column `catergoria_tarefa_id` on the `tarefas` table. All the data in the column will be lost.
  - You are about to drop the `catergoria_tarefas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoria_tarefa_id` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tarefas" DROP CONSTRAINT "tarefas_catergoria_tarefa_id_fkey";

-- AlterTable
ALTER TABLE "tarefas" DROP COLUMN "catergoria_tarefa_id",
ADD COLUMN     "categoria_tarefa_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "catergoria_tarefas";

-- CreateTable
CREATE TABLE "categoria_tarefas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categoria_tarefas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_categoria_tarefa_id_fkey" FOREIGN KEY ("categoria_tarefa_id") REFERENCES "categoria_tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

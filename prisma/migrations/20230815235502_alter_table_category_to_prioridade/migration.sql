/*
  Warnings:

  - You are about to drop the column `categoria_tarefa_id` on the `tarefas` table. All the data in the column will be lost.
  - You are about to drop the `categoria_tarefas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `prioridade_tarefa_id` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tarefas" DROP CONSTRAINT "tarefas_categoria_tarefa_id_fkey";

-- AlterTable
ALTER TABLE "tarefas" DROP COLUMN "categoria_tarefa_id",
ADD COLUMN     "prioridade_tarefa_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "categoria_tarefas";

-- CreateTable
CREATE TABLE "prioridade_tarefas" (
    "id" TEXT NOT NULL,
    "prioridade01" BOOLEAN NOT NULL DEFAULT false,
    "prioridade02" BOOLEAN NOT NULL DEFAULT false,
    "prioridade03" BOOLEAN NOT NULL DEFAULT false,
    "prioridade04" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prioridade_tarefas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_prioridade_tarefa_id_fkey" FOREIGN KEY ("prioridade_tarefa_id") REFERENCES "prioridade_tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

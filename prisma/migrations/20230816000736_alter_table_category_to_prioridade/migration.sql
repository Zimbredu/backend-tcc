/*
  Warnings:

  - You are about to drop the column `prioridade_tarefa_id` on the `tarefas` table. All the data in the column will be lost.
  - Added the required column `prioridade_id` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tarefas" DROP CONSTRAINT "tarefas_prioridade_tarefa_id_fkey";

-- AlterTable
ALTER TABLE "tarefas" DROP COLUMN "prioridade_tarefa_id",
ADD COLUMN     "prioridade_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_prioridade_id_fkey" FOREIGN KEY ("prioridade_id") REFERENCES "prioridade_tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

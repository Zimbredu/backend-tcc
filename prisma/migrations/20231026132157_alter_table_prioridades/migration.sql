-- CreateTable
CREATE TABLE "cadastro_usuarios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cadastro_usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prioridade_tarefa" (
    "id" TEXT NOT NULL,
    "prioridade" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prioridade_tarefa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarefas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "prioridade_id" TEXT NOT NULL,

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requisicao_tarefas" (
    "id" TEXT NOT NULL,
    "task" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requisicao_tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrantes_tarefas" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "requisicao_tarefa_id" TEXT NOT NULL,
    "tarefa_id" TEXT NOT NULL,

    CONSTRAINT "integrantes_tarefas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_prioridade_id_fkey" FOREIGN KEY ("prioridade_id") REFERENCES "prioridade_tarefa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes_tarefas" ADD CONSTRAINT "integrantes_tarefas_requisicao_tarefa_id_fkey" FOREIGN KEY ("requisicao_tarefa_id") REFERENCES "requisicao_tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes_tarefas" ADD CONSTRAINT "integrantes_tarefas_tarefa_id_fkey" FOREIGN KEY ("tarefa_id") REFERENCES "tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

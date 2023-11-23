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
CREATE TABLE "categoria_tarefas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categoria_tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarefas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "categoria_tarefa_id" TEXT NOT NULL,

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
    "amount" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "requisicao_tarefa_id" TEXT NOT NULL,
    "tarefa_id" TEXT NOT NULL,

    CONSTRAINT "integrantes_tarefas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_categoria_tarefa_id_fkey" FOREIGN KEY ("categoria_tarefa_id") REFERENCES "categoria_tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes_tarefas" ADD CONSTRAINT "integrantes_tarefas_requisicao_tarefa_id_fkey" FOREIGN KEY ("requisicao_tarefa_id") REFERENCES "requisicao_tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes_tarefas" ADD CONSTRAINT "integrantes_tarefas_tarefa_id_fkey" FOREIGN KEY ("tarefa_id") REFERENCES "tarefas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

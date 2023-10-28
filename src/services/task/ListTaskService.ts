import prismaClient from "../../prisma";

interface ProductTaskRequest{
    categoria_tarefa_id: string;
}

class ListTaskService{
    async execute({ categoria_tarefa_id }: ProductTaskRequest){

        const findTaskByPriority = await prismaClient.tarefa.findMany({
            where:{
                categoria_tarefa_id:categoria_tarefa_id
            }
        })
        return  findTaskByPriority;
    }

}

export {ListTaskService}
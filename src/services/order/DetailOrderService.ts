import prismaClient from "../../prisma";

interface DetailRequest{
    requisicao_tarefa_id: string;
}

class DetailOrderService{
    async execute({ requisicao_tarefa_id }: DetailRequest){
        const orders = await prismaClient.intergranteTarefa.findMany({
            where:{
                requisicao_tarefa_id: requisicao_tarefa_id
            },
             include:{
                tarefa: true,
                requisicaotarefas: true,
            }
        })

        return orders;
    }

}

export { DetailOrderService }
import prismaClient from "../../prisma";


interface OrderRequest{
     requisicao_tarefa_id: string 
}

class SendOrderService{
    async execute({requisicao_tarefa_id}: OrderRequest){
        const task = await prismaClient.requisicao_Tarefa.update({
            where:{
                id: requisicao_tarefa_id
            },
            data:{
                draft: false
            }
        })
        return task;
    }
} 

export { SendOrderService }

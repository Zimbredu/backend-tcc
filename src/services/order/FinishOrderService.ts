import prismaClient from "../../prisma";

interface OrderRequest{
    requisicao_tarefa_id: string;
}

class FinishOrderService{
    async execute({ requisicao_tarefa_id }: OrderRequest){

        const order = await prismaClient.requisicao_Tarefa.update({
            where:{
                id: requisicao_tarefa_id
            },
            data:{
                status: true,
            }
        });

        return order;
    }
}
 
export { FinishOrderService }
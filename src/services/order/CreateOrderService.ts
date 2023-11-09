import prismaClient from "../../prisma";

interface OrderRequest{
    task: number;
    name: string;
    draft: boolean;
}

class CreateOrderService{
    async execute({task, name, draft}: OrderRequest){

        const order = await prismaClient.requisicao_Tarefa.create({
            data:{
                task: task,
                name: name,
                draft: draft
            }
        })

        return order;

    }
}

export { CreateOrderService }
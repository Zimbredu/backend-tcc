import prismaClient from "../../prisma";

interface OrderRequest{
    task: number;
    name: string;
}

class CreateOrderService{
    async execute({task, name}: OrderRequest){

        const order = await prismaClient.requisicao_Tarefa.create({
            data:{
                task: task,
                name: name
            }
        })

        return order;

    }
}

export { CreateOrderService }
import prismaClient from "../../prisma";

class ListEndedOrdersService{
    async execute(){

        const orders = await prismaClient.requisicao_Tarefa.findMany({
            where:{
                status: true,
            },
            orderBy:{
                created_at: 'asc'
            }
        });
        return orders;
    }
}

export { ListEndedOrdersService }
import prismaClient from "../../prisma";

class ListOrdersService{
    async execute(){

        const orders = await prismaClient.requisicao_Tarefa.findMany({
            where:{
                draft: false,
                status: false,
            },
            orderBy:{
                created_at: 'desc'
            }
        });
        return orders;
    }
}

export { ListOrdersService }
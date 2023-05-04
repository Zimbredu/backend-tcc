import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string;
}

class DetailOrderService{
    async execute({ order_id }: DetailRequest){
        const orders = await prismaClient.intergranteEquipes.findMany({
            where:{
                id: order_id
            },
            include:{
                servico: true,
                requisicaoservico: true,
            }
        })

        return orders;
    }

}

export { DetailOrderService }
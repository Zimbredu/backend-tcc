import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string
}

class RemoveOrderService{
    async execute({ order_id}: OrderRequest){

        const order = await prismaClient.requisicaoServico.delete({
            where:{
                id: order_id,
            }
        })

        return order;

    }
}
export { RemoveOrderService }

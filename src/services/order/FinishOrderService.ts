import prismaClient from "../../prisma";

interface OrderRequest{
    id_Servico: string;
}

class FinishOrderService{
    async execute({ id_Servico }: OrderRequest){

        const order = await prismaClient.requisicaoServico.update({
            where:{
                id: id_Servico
            },
            data:{
                status: true,
            }
        });

        return order;
    }
}
 
export { FinishOrderService }
import prismaClient from "../../prisma";

interface ItemRequest{
    /* requisicao_tarefa_id: string; */
    integrante_id: string
}

class RemoveItemService{
    async execute({  integrante_id }: ItemRequest){

        const order = await prismaClient.intergranteTarefa.delete({
            where:{
                id: integrante_id 
            }
        })
        return order;
    }
}

export { RemoveItemService }
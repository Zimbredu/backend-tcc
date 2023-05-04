import prismaClient from "../../prisma";

interface ItemRequest{
    id_Servico: string;
}

class RemoveItemService{
    async execute({id_Servico}: ItemRequest){

        const order = await prismaClient.intergranteEquipes.delete({
            where:{
                id: id_Servico
            }
        })
        return order;
    }
}

export { RemoveItemService }
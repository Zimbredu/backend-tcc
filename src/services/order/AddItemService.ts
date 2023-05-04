import prismaClient from "../../prisma";

interface ItemRequest{
    id_RequisicaoServico: string;
    id_Servico: string;
    amount: number;
}

/*  id_RequisicaoServico String
  id_Servico String */
class AddItemService{
    async execute({id_RequisicaoServico, id_Servico, amount}: ItemRequest){

        const order = await prismaClient.intergranteEquipes.create({
            data:{
                id_RequisicaoServico: id_RequisicaoServico,
                id_Servico: id_Servico,
                amount
            }
        })
        return order;
    }
}

export { AddItemService }
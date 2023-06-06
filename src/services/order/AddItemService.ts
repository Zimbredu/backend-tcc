import prismaClient from "../../prisma";

interface ItemRequest{
    requisicao_tarefa_id: string;
    tarefa_id: string;
    amount: number;
}

/*  id_RequisicaoServico String
  id_Servico String */
class AddItemService{
    async execute({requisicao_tarefa_id, tarefa_id, amount}: ItemRequest){

        const order = await prismaClient.intergranteTarefa.create({
            data:{
                requisicao_tarefa_id: requisicao_tarefa_id,
                tarefa_id: tarefa_id,
                amount
            }
        })
        return order;
    }
}

export { AddItemService }
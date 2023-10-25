import prismaClient from "../../prisma";

interface ServicoRequest{
    id: string;
}

class ListByCategoryService{
    async execute({ id }: ServicoRequest){

        const findByCategoryService = await prismaClient.categoria_Tarefa.findMany({
            where:{
                id: id
            }
        })

        return findByCategoryService;
    }
}

export { ListByCategoryService }

import prismaClient from "../../prisma";

interface ServicoRequest{
    id_Categoria: string;
}

class ListByCategoryService{
    async execute({ id_Categoria }: ServicoRequest){

        const findByCategoryService = await prismaClient.servico.findMany({
            where:{
                id_Categoria: id_Categoria
            }
        })

        return findByCategoryService;
    }
}

export { ListByCategoryService }

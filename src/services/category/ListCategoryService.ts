import prismaClient from "../../prisma";

class ListCategoryTask
{
    async execute(){

        /* const category = await prismaClient.categoriaServico.findMany({ */
        const category = await prismaClient.categoria_Tarefa.findMany({
            select:{
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export { ListCategoryTask }
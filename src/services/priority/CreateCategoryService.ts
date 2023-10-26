import prismaClient from "../../prisma";

interface PrioridadeRequest{
    prioridade: number;
}

 /* class CreateCategoryService{ */
class CreateCategoryTask{
    async execute({prioridade}: PrioridadeRequest){
        

        //  if(prioridade01 === null){
        //         throw new Error('Prioridade invalida')
        // }


        /* const category = await prismaClient.categoriaServico.create({ */
        const priority = await prismaClient.prioridade_Tarefa.create({
            data:{
                prioridade: prioridade
            },
            select:{
                id: true,
                prioridade: true
            }
        })
        return priority;
   }
}
export {CreateCategoryTask}
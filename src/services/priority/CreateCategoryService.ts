import prismaClient from "../../prisma";

interface PrioridadeRequest{
    prioridade01: boolean;
    prioridade02: boolean;
    prioridade03: boolean;
    prioridade04: boolean;
}

 /* class CreateCategoryService{ */
 class CreateCategoryTask{
    async execute({prioridade01, prioridade02, prioridade03, prioridade04}: PrioridadeRequest){
        

         if(prioridade01 === null){
                throw new Error('Prioridade invalida')
        }
        /* const category = await prismaClient.categoriaServico.create({ */
        const prioridade = await prismaClient.prioridade_Tarefa.create({
            data:{
                prioridade01: prioridade01,
                prioridade02: prioridade02,
                prioridade03: prioridade03,
                prioridade04: prioridade04
            },
            select:{
                id: true,
                prioridade01: true,
            }
        })
        return prioridade;
   }
}
export {CreateCategoryTask}
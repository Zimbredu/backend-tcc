import prismaClient from "../../prisma";

interface PrioridadeRequest{
    name: string;
   
}

 /* class CreateCategoryService{ */
 class CreateCategoryTaskService{
     async execute({name}: PrioridadeRequest){
        

         if(name === ''){
               throw new Error('Prioridade invalida')
        } 
        /* const category = await prismaClient.categoriaServico.create({ */
        const prioridadeTarefa = await prismaClient.categoria_Tarefa.create({
            data:{
                name:name,
            },
            select:{
                id: true,
                name: true,
            }
        })
        return prioridadeTarefa;
   }
}
export {CreateCategoryTaskService}
import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;
}

 /* class CreateCategoryService{ */
 class CreateCategoryTask{
    async execute( {name }: CategoryRequest){
        

         if(name === ''){
                throw new Error('Nome invalido')
        }
        /* const category = await prismaClient.categoriaServico.create({ */
        const category = await prismaClient.categoria_Tarefa.create({
            data:{
                name: name,
            },
            select:{
                id: true,
                name: true,
            }
        })
        return category;
   }
}
export {CreateCategoryTask}
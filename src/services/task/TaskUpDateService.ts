import prismaClient from "../../prisma";


interface OrderRequest{
     tarefa_id: string 
}

class TaskUpDateService{
    async execute({tarefa_id}: OrderRequest){
        const task = await prismaClient.tarefa.update({
            where:{
                id: tarefa_id
            },
            data:{
                status: false,
                //draft: false
            }
        })
        return task;
    }
} 

export { TaskUpDateService }

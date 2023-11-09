import prismaClient from "../../prisma";

class ListAllTasksService{
    async execute(){

        const findAllTasks = await prismaClient.tarefa.findMany({
            select:{
                id: true,
                name: true,
                description: true
            }
        })
        return  findAllTasks;
    }

}

export {ListAllTasksService}
import prismaClient from "../../prisma";

interface TaskRequest{
    name: string;
    description: string;
    prioridade_id: string;
}

class CreateTaskService{
    async execute({name, description /* id_Categoria */, prioridade_id}: TaskRequest){
      
      const servico = await prismaClient.tarefa.create({
        data:{
          name: name,
          description: description,
          prioridade_id: prioridade_id,
        }
      })
     
      
      return servico;
    }
}

export { CreateTaskService  }
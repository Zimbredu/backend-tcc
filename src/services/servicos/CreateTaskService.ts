import prismaClient from "../../prisma";

interface TaskRequest{
    name: string;
    description: string;
    /* id_Categoria: string; */
    prioridade: string;
}

class CreateTaskService{
    async execute({name, description, /* id_Categoria */ prioridade}: TaskRequest){
      
      const servico = await prismaClient.tarefa.create({
        data:{
          name: name,
          description: description,
          /* id_Categoria, */
          prioridade_id: prioridade
        }
      })
     
      
      return servico;
    }
}

export { CreateTaskService  }
import prismaClient from "../../prisma";

interface TaskRequest{
    name: string;
    description: string;
    banner: string;
    /* id_Categoria: string; */
    catergoria_tarefa_id: string;
}

class CreateTaskService{
    async execute({name, description, banner /* id_Categoria */, catergoria_tarefa_id}: TaskRequest){
      
      const servico = await prismaClient.tarefa.create({
        data:{
          name: name,
          description: description,
          banner: banner,
          /* id_Categoria, */
          catergoria_tarefa_id,
        }
      })
     
      
      return servico;
    }
}

export { CreateTaskService  }
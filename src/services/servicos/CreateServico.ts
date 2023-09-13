import prismaClient from "../../prisma";

interface TaskRequest{
    name: string;
    description: string;
    categoria_tarefa_id: string;
}

class CreateTaskService{
    async execute({name, description, categoria_tarefa_id}: TaskRequest){
      
      const servico = await prismaClient.tarefa.create({
        data:{
          name: name,
          description: description,
<<<<<<< HEAD
          categoria_tarefa_id: categoria_tarefa_id
=======
          banner: banner,
          /* id_Categoria, */
          catergoria_tarefa_id: catergoria_tarefa_id,
>>>>>>> main
        }
      })
     
      
      return servico;
    }
}

export { CreateTaskService  }
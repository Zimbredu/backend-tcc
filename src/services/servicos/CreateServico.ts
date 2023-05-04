import prismaClient from "../../prisma";

interface ServicoRequest{
    name: string;
    description: string;
    banner: string;
    id_Categoria: string;
}

class CreateService{
    async execute({name, description, banner, id_Categoria}: ServicoRequest){
      
      const servico = await prismaClient.servico.create({
        data:{
          name: name,
          description: description,
          banner: banner,
          id_Categoria,
        }
      })
     
      
      return servico;
    }
}

export {CreateService}
import {Request, Response} from 'express';
import { CreateService } from '../../services/servicos/CreateServico';

class CreateServicoController{
    async handle(req: Request, res: Response){
        const{name, description, id_Categoria} = req.body;

        const createServico = new CreateService();

        if(!req.file){
            throw new Error('erro ao carregar arquivo')
        }else{

            const {originalname, filename: banner} = req.file;

            const servico = await createServico.execute({
                name,
                description,
                banner, 
                id_Categoria
            });
            return res.json(servico);
        }

    }
}

export { CreateServicoController }
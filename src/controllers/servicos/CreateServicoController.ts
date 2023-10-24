import {Request, Response} from 'express';
import { CreateTaskService } from '../../services/servicos/CreateServico';
/* import { CreateService } from '../../services/servicos/CreateServico'; */

class CreateServicoController{
    async handle(req: Request, res: Response){
        const{name, description,categoria_tarefa_id} = req.body;

        const createTaskService = new CreateTaskService();

      /*   if(!req.file){
            throw new Error('erro ao carregar arquivo')
        }else{

        } */
            //const {originalname, filename: banner} = req.file;

            const task = await createTaskService.execute({
                name,
                description,
                categoria_tarefa_id
            });
            return res.json(task);

    }
}

export { CreateServicoController }
import {Request, Response} from 'express';
import { CreateTaskService } from '../../services/servicos/CreateTaskService';
/* import { CreateService } from '../../services/servicos/CreateServico'; */

class CreateTaskController{
    async handle(req: Request, res: Response){
        const{name, description, /* id_Categoria */ prioridade_id} = req.body;

        const createTaskService = new CreateTaskService();

            const task = await createTaskService.execute({
                name,
                description,
               /*  id_Categoria */
                prioridade_id
            });
            return res.json(task);
        //}

    }
}

export { CreateTaskController };
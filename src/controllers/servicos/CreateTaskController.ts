import {Request, Response} from 'express';
import { CreateTaskService } from '../../services/servicos/CreateTaskService';
/* import { CreateService } from '../../services/servicos/CreateServico'; */

class CreateTaskController{
    async handle(req: Request, res: Response){
        const{name, description, /* id_Categoria */ prioridade} = req.body;

        const createTaskService = new CreateTaskService();

        // if(!req.file){
        //     throw new Error('erro ao carregar arquivo')
        // }else{

            //const {originalname, filename: banner} = req.file;

            const task = await createTaskService.execute({
                name,
                description,
               /*  id_Categoria */
               prioridade
            });
            return res.json(task);
        //}

    }
}

export { CreateTaskController };
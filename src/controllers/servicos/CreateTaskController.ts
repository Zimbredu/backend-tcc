import {Request, Response} from 'express';
import { CreateTaskService } from '../../services/servicos/CreateTaskService';
/* import { CreateService } from '../../services/servicos/CreateServico'; */

class CreateTaskController{
    async handle(req: Request, res: Response){
<<<<<<< HEAD:src/controllers/servicos/CreateServicoController.ts
        const{name, description,categoria_tarefa_id} = req.body;

        const createTaskService = new CreateTaskService();

      /*   if(!req.file){
            throw new Error('erro ao carregar arquivo')
        }else{

        } */
=======
        const{name, description, /* id_Categoria */ prioridade} = req.body;

        const createTaskService = new CreateTaskService();

        // if(!req.file){
        //     throw new Error('erro ao carregar arquivo')
        // }else{

>>>>>>> 996e797606cdc5b700fa6d013ebf1b4af1da12e9:src/controllers/servicos/CreateTaskController.ts
            //const {originalname, filename: banner} = req.file;

            const task = await createTaskService.execute({
                name,
                description,
<<<<<<< HEAD:src/controllers/servicos/CreateServicoController.ts
                categoria_tarefa_id
            });
            return res.json(task);
=======
               /*  id_Categoria */
               prioridade
            });
            return res.json(task);
        //}
>>>>>>> 996e797606cdc5b700fa6d013ebf1b4af1da12e9:src/controllers/servicos/CreateTaskController.ts

    }
}

export { CreateTaskController };
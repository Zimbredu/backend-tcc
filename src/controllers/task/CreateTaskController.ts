import {Request, Response} from 'express';
import {CreateTaskService} from '../../services/task/CreateTaskService'

class CreateTaskController{
    async handle(req: Request, res: Response){
        const{name, description, categoria_tarefa_id} = req.body;

        const createTaskService = new CreateTaskService();

            const task = await createTaskService.execute({
                name,
                description,
                categoria_tarefa_id
            });
            return res.json(task);
        //}

    }
}

export { CreateTaskController };
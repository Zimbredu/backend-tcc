import{Request, Response } from 'express'
import { ListTaskService } from '../../services/task/ListTaskService'

class ListTaskController{
    async handle(req: Request, res: Response){ 
        const categoria_tarefa_id = req.query.categoria_tarefa_id as string;

        const listByTaskService = new ListTaskService();

        const task = await listByTaskService.execute({
            categoria_tarefa_id
        });

    
        return res.json(task);
    }
}

export { ListTaskController };
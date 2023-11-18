import{Request, Response } from 'express'
import { ListAllTasksService } from '../../services/task/ListAllTasksService'

class ListAllTasksController{
    async handle(req: Request, res: Response){ 

        const listByTaskService = new ListAllTasksService();

        const tasks = await listByTaskService.execute();

    
        return res.json(tasks);
    }
}

export { ListAllTasksController };
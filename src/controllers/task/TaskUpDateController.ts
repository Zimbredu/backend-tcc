import { Request, Response } from "express";
//import { SendOrderService } from "../../services/order/SendOrderService";
import {TaskUpDateService} from "../../services/task/TaskUpDateService";

class TaskUpDateController{
    async handle(req: Request, res: Response){

        const { tarefa_id } = req.body;

        const taskUpdate = new TaskUpDateService();

        const task = await taskUpdate.execute({
            tarefa_id
        });

        return res.json(task);
    }
}

export { TaskUpDateController }
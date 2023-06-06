import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";


class FinishOrderController{
    async handle(req: Request, res: Response){

        const { requisicao_tarefa_id } = req.body;
        
        const finishOrderService = new FinishOrderService();

        const task = await finishOrderService.execute({
            requisicao_tarefa_id,
        });
        return res.json(task);
    }
}

export { FinishOrderController }
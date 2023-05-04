import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";


class FinishOrderController{
    async handle(req: Request, res: Response){

        const { id_Servico} = req.body;
        
        const finishOrderService = new FinishOrderService();

        const order = await finishOrderService.execute({
            id_Servico,
        });
        return res.json(order);
    }
}

export { FinishOrderController }
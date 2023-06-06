import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController{
    async handle(req: Request, res: Response){

        const { requisicao_tarefa_id } = req.body;

        const sendOrder = new SendOrderService();

        const order = await sendOrder.execute({
            requisicao_tarefa_id
        });

        return res.json(order);
    }
}

export { SendOrderController }
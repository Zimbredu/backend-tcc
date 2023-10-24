import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DatailOrderController{
    async handle(req: Request, res: Response){

        /* const order_id = req.query.order_id as string; */
        const requisicao_tarefa_id = req.query.requisicao_tarefa_id as string

        const datailOrderService = new DetailOrderService();

        const orders = await datailOrderService.execute({
            requisicao_tarefa_id
        });
        return res.json(orders);
    }
}
export { DatailOrderController }
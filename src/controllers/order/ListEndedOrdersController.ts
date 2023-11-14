import { Request, Response } from "express";
import { ListEndedOrdersService } from "../../services/order/ListEndedOrdersService";

class ListEndedOrdersController{
    async handle(req: Request, res: Response){
        const listOrdersService = new ListEndedOrdersService();

        const orders = await listOrdersService.execute();

        return res.json(orders);
    }
}

export { ListEndedOrdersController }
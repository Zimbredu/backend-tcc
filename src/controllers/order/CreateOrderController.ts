import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController{
    async handle(req: Request, res: Response){
        const { task , name } = req.body;

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({
            task,
            name,
        });

        return res.json(order);

    }
}

export { CreateOrderController }
import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController{
    async handle(req: Request, res: Response){
        const id_Servico = req.query.id_Servico as string;

        const removeItemService = new RemoveItemService();

        const order = await removeItemService.execute({
            id_Servico
        })
        return res.json(order);
    }
}

export { RemoveItemController }
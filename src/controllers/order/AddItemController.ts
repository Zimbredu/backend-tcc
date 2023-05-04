import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";


class AddItemController{
    async handle(req: Request, res: Response){

        const {  id_RequisicaoServico, id_Servico, amount } = req.body;

        const addItem = new AddItemService();

        const order = await addItem.execute({
            id_RequisicaoServico,
            id_Servico,
            amount
        })
        return res.json(order);
    }
}

export { AddItemController }
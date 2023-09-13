import{Request, Response } from 'express'
import { ListByCategoryService } from '../../services/servicos/ListByCategoryService'

class ListByCategoryController{
    async handle(req: Request, res: Response){ 
        const id = req.query.id as string;

        const listByCategoryService = new ListByCategoryService();

        const servicos = await listByCategoryService.execute({
            id
        });

        return res.json(servicos);
    }
}

export { ListByCategoryController };
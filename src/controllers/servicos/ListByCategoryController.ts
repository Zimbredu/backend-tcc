import{Request, Response } from 'express'
import { ListByCategoryService } from '../../services/servicos/ListByCategoryService'

class ListByCategoryController{
    async handle(req: Request, res: Response){ 
        const id_Categoria = req.query.id_Categoria as string;

        const listByCategoryService = new ListByCategoryService();

        const servicos = await listByCategoryService.execute({
            id_Categoria
        });

        return res.json(servicos);
    }
}

export { ListByCategoryController };
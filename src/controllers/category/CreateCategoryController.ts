import { Request, Response } from "express";
import { CreateCategoryTaskService } from "../../services/category/CreateCategoryTaskService";


class CreateCategoryController{
    async handle(req: Request, res: Response){
        const {name} = req.body;

        const createCategoryTask = new CreateCategoryTaskService();

        const category = await createCategoryTask.execute({
            name,
           
        });

        return res.json(category);

    }
}
export {CreateCategoryController}
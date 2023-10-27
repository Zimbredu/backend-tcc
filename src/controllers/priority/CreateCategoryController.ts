import { Request, Response } from "express";
import { CreateCategoryTask } from "../../services/priority/CreateCategoryService";
/* import { CreateCategoryService } from "../../services/category/CreateCategoryService"; */


class CreateCategoryController{
    async handle(req: Request, res: Response){
        const {prioridade} = req.body;

        const createCategoryTask = new CreateCategoryTask();

        const category = await createCategoryTask.execute({
            prioridade
        });

        return res.json(category);

    }
}
export {CreateCategoryController}
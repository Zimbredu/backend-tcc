import { Request, Response } from "express";
import { CreateCategoryTask } from "../../services/category/CreateCategoryService";
/* import { CreateCategoryService } from "../../services/category/CreateCategoryService"; */


class CreateCategoryController{
    async handle(req: Request, res: Response){
        const {name} = req.body;

        const createCategoryTask = new CreateCategoryTask();

        const category = await createCategoryTask.execute({
            name
        });

        return res.json(category);

    }
}
export {CreateCategoryController}
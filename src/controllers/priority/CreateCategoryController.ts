import { Request, Response } from "express";
import { CreateCategoryTask } from "../../services/priority/CreateCategoryService";
/* import { CreateCategoryService } from "../../services/category/CreateCategoryService"; */


class CreateCategoryController{
    async handle(req: Request, res: Response){
        const {prioridade01, prioridade02, prioridade03, prioridade04} = req.body;

        const createCategoryTask = new CreateCategoryTask();

        const category = await createCategoryTask.execute({
            prioridade01,
            prioridade02,
            prioridade03,
            prioridade04
        });

        return res.json(category);

    }
}
export {CreateCategoryController}
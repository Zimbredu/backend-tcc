import { Request, Response } from "express";
import { ListCategoryTask } from "../../services/priority/ListCategoryService";
/* import { ListCategoryService } from "../../services/category/ListCategoryService"; */

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listaCategoryTask = new ListCategoryTask();

        const category = await listaCategoryTask.execute();

        return res.json(category);
    }
}

export {ListCategoryController};
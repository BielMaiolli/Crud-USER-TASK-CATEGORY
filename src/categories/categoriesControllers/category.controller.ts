import { Request, Response } from "express";
import categoryService from "../categoriesServices/category.service";

class categoryController {
    
    async create(req: Request, res: Response){
        const createdCategory = await categoryService.create(req.body)
        res.status(201)
        return res.json(createdCategory)
    }

    
    async findAll(req: Request, res: Response) {
        const foundCategories = await categoryService.findAll()
        res.status(200)
        return res.json(foundCategories)
    }

    async findById(req: Request, res: Response) {
        const foundCategory = await categoryService.findById(req.params.id)
        res.status(200)
        return res.json(foundCategory)
    }

    
    async update(req: Request, res: Response) {
        const updatedCategory = await categoryService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedCategory)
    }
   
    async delete(req: Request, res: Response) {
        const deletedCategory = await categoryService.delete(req.params.id)
        res.status(200)
        return res.json(deletedCategory)
    }
}

export default new categoryController()
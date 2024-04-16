import { Request, Response } from "express";
import taskService from "../tasksServices/task.service";

class taskController {

    async create(req: Request, res: Response){
        const createdTask = await taskService.create(req.body)
        res.status(201)
        return res.json(createdTask)
    }

    
    async findAll(req: Request, res: Response) {
        const foundTask = await taskService.findAll()
        res.status(200)
        return res.json(foundTask)
    }

    async findById(req: Request, res: Response) {
        const foundTask = await taskService.findById(req.params.id)
        res.status(200)
        return res.json(foundTask)
    }

    
    async update(req: Request, res: Response) {
        const updatedTask = await taskService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedTask)
    }
   
    async delete(req: Request, res: Response) {
        const deletedTask = await taskService.delete(req.params.id)
        res.status(200)
        return res.json(deletedTask)
    }
}

export default new taskController()
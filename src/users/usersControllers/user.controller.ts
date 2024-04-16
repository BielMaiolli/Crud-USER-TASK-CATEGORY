import { Request, Response } from "express";
import userService from "../usersServices/user.service";


class userController {

    async create(req: Request, res: Response){
        const createdUser = await userService.create(req.body)
        res.status(201)
        return res.json(createdUser)
    }


    async findAll(req: Request, res: Response) {
        const foundUsers = await userService.findAll()
        res.status(200)
        return res.json(foundUsers)
    }

    async findById(req: Request, res: Response) {
        const foundUser = await userService.findById(req.params.id)
        res.status(200)
        return res.json(foundUser)
    }

    
    async update(req: Request, res: Response) {
        const updatedUser = await userService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedUser)
    }
   
    async delete(req: Request, res: Response) {
        const deletedUser = await userService.delete(req.params.id)
        res.status(200)
        return res.json(deletedUser)
    }

}

export default new userController()
import { Router } from "express";
import userController from "./users/usersControllers/user.controller";

const userRoutes = Router()

userRoutes.post('/users', userController.create)

userRoutes.get('/users', userController.findAll)

userRoutes.get('/users/:id', userController.findById)

userRoutes.put('/users/:id', userController.update)

userRoutes.delete('/users/:id', userController.delete)

export { userRoutes }
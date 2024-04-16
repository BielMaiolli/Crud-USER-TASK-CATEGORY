import { Router } from "express";
import taskController from "./tasks/tasksControllers/task.controller";

const taskRoutes = Router()

taskRoutes.post('/tasks', taskController.create)

taskRoutes.get('/tasks', taskController.findAll)

taskRoutes.get('/tasks/:id', taskController.findById)

taskRoutes.put('/tasks/:id', taskController.update)

taskRoutes.delete('/tasks/:id', taskController.delete)

export { taskRoutes }
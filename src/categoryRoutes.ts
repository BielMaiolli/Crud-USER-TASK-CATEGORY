import { Router } from "express";
import categoryController from './categories/categoriesControllers/category.controller';

const categoryRoutes = Router()

categoryRoutes.post('/categories', categoryController.create)

categoryRoutes.get('/categories', categoryController.findAll)

categoryRoutes.get('/categories/:id', categoryController.findById)

categoryRoutes.put('/categories/:id', categoryController.update)

categoryRoutes.delete('/categories/:id', categoryController.delete)


export { categoryRoutes }

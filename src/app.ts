import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './userRoutes';
import { taskRoutes } from './taskRoutes';
import { categoryRoutes } from './categoryRoutes';

class App{

  public express: express.Application;

    constructor() {
      this.express = express()
      this.middleware()
      this.database()
      this.userRoutes()
      this.taskRoutes()
      this.categoryRoutes()
    }

    public middleware() {
       this.express.use(express.json())
    }

    public async database() {
        try {
          await mongoose.connect('mongodb://localhost:27017/userTask')
          console.log('Conectado ao Banco de Dados')
        } catch (error) {
            console.log('Erro na conexão com o Banco de Dados:', error)
        }
    }

    public userRoutes(){
      this.express.use(userRoutes)
    }

    public taskRoutes(){
      this.express.use(taskRoutes)
    }

    public categoryRoutes(){
      this.express.use(categoryRoutes)
    }
}

export default new App().express
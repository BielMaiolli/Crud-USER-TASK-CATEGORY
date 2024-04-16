import taskModel from '../tasksSchemas/task.schema';
import { taskType } from '../tasksTypes/task.type';

class taskService {

    async create(task: taskType){
     const createdTask = await taskModel.create(task)
     return createdTask
    } 
 
    async findAll() {
        const foundTasks = await taskModel.find()
        return foundTasks
      }
  
  
     async findById(id: string) {
        const foundTask = await taskModel.findById(id)
        return foundTask
      }
  
      async update(id: string, task: taskType) {
        const updatedTask = await taskModel.findByIdAndUpdate(id, {

           idTask: task.idTask, 
           titleTask: task.titleTask, 
           descriptionTask: task.descriptionTask,
           dateCreationTask: task.dateCreationTask, 
           dateEndTask: task.dateEndTask, 
           typeTask: task.typeTask,
           statusTask: task.statusTask,
           idUser: task.idUser
        }, {new: true} )
    
        return updatedTask
      }
  
  
      async delete(id: string) {
        try {
              await taskModel.findByIdAndDelete(id)
              return "Task removida com sucesso"
       
            } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o usuário: ${error}`)    
       } 
       
    
    
      }

 }
 
 export default new taskService()
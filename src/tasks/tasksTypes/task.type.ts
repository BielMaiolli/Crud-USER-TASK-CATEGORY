import statusTask from "../tasksSchemas/statusTask.enum"

export interface taskType {
    idTask: Number, 
    titleTask: String, 
    descriptionTask: String,
    dateCreationTask: Date, 
    dateEndTask: Date, 
    typeTask: String,
    statusTask: statusTask,
    idUser: Number
}
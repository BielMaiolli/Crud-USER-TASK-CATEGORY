import { Schema, model } from "mongoose";
import statusTask from "./statusTask.enum";

const taskSchema = new Schema({
    idTask: Number, 
    titleTask: String, 
    descriptionTask: String,
    dateCreationTask: Date, 
    dateEndTask: Date, 
    typeTask: String,
    statusTask: {type: String, statusTask},
    idUser: Number
}, {
    timestamps: true
})

export default model('Task', taskSchema)
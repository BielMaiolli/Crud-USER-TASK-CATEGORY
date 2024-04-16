import { timeStamp } from "console";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    idUser: Number,
    nameUser: String,
    pesoUser: Number,
    senhaUser: String,
    emailUser: String
}, {
   timestamps: true 
   }
)

export default model('User', userSchema)
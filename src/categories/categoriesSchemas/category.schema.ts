import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    idCategory: Number,
    nameCategory: String,
    colorCategory: String  
}, {
    timestamps: true
})

export default model('Category', categorySchema)
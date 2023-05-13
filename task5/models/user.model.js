import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true }
}, { versionKey: false, timestamps: true })

const userModel = model('user', userSchema)
export default userModel

import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String
})

export const userModel = mongoose.model('user', userSchema)
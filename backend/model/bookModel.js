import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    img: String,
    description: String
})

export const BookModel = mongoose.model('books', bookSchema)
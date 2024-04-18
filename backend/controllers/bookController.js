import asyncHandler from "express-async-handler";
import { BookModel as Book } from "../model/bookModel.js";

const getBooks = asyncHandler ( async (req, res) => {
    const books = await Book.find();
    res.json(books)
})

const addBook = asyncHandler( async(req, res) => {
    const {name, category, price, img, description} = req.body;
    if(!name) {
        res.status(400);
        throw new Error('Please enter details')
    }
    const bookDetail = await Book.create({
        name,
        category,
        price,
        img,
        description
    })
    res.status(200).json(bookDetail)
})

const updateBook = asyncHandler(async(req, res) => {
    const book = await Book.findById(req.params.id)
    if(!book) {
        res.status(400)
        throw new Error('Book not found')
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedBook)
})

const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if(!book) {
        res.status(401)
        throw new Error('Book not found')
    }
    await book.deleteOne()
    res.status(200).json({id: req.params.id})
})

export {getBooks, addBook, updateBook, deleteBook}
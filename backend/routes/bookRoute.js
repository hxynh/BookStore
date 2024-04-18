import express from "express";
import { getBooks, addBook, deleteBook, updateBook } from "../controllers/bookController.js";

const router = express.Router();
router.get('/', getBooks );
router.post('/add', addBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export {router}
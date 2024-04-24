import axios from "axios";
import { Book } from "./booksSlice";

const API_URL = "http://localhost:8000/";

const getBooks = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const addBook = async (bookDetails: Book) => {
    const response = await axios.post(API_URL+'add', bookDetails)
    return response.data;
}

const updateBook = async (bookDetails: Book) => {
    const response = await axios.put(API_URL+bookDetails._id, bookDetails)
    return response.data;
}

const deleteBook = async (bookId: string) => {
    const response = await axios.delete(API_URL+bookId)
    return response.data;
}

export const booksService = {
    getBooks,
    addBook,
    updateBook,
    deleteBook
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import booksList from "../assets/books.json";
import { toast } from "react-toastify";

export interface Book {
    id: string,
    name: string,
    category: string,
    price: number,
    img: string,
    description: string
}

interface BookState {
    books: Book[]
}

const initialState: BookState = {
    books: booksList
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            try {
                state.books.push(action.payload)
                toast.success("Yay! Book successfully Added!")
            } catch (error) {
                toast.error("Oops, unable to Add book! Please try again later")
            }
        },
        editBook: (state, action: PayloadAction<Book>) => {
            try {
                const {id, name, category, price, img, description} = action.payload
                const bookMatch = state.books.find(book => book.id === id)
                
                if(bookMatch) {
                    bookMatch.name = name,
                    bookMatch.category = category,
                    bookMatch.price = price,
                    bookMatch.img = img,
                    bookMatch.description = description
                }
                toast.success("Yay! Book successfully Update!")

            } catch (error) {
                toast.error("Oops, unable to Update book! Please try again later")
            }
        },
        deleteBook: (state, action:PayloadAction<string>) => {
            try {
                state.books = state.books.filter(book => book.id !== action.payload)
                toast.success("Yay! Book successfully Deleted!")
            } catch (error) {
                toast.error("Oops, unable to Delete book! Please try again later")
            } 
        }
    }
})

export const {addBook, editBook, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;
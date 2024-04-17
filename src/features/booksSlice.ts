import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import booksList from "../assets/books.json";

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
            } catch (error) {
                console.log("Unable to upload...")
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
            } catch (error) {
                console.log("Unable to edit...")
            }
        },
        deleteBook: (state, action:PayloadAction<string>) => {
            try {
                state.books = state.books.filter(book => book.id !== action.payload)
            } catch (error) {
                console.log("Unable to delete...")
            } 
        }
    }
})

export const {addBook, editBook, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;
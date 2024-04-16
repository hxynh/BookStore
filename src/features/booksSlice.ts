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
            state.books.push(action.payload)
            console.log("Payload: ", action.payload)
        },
        editBook: (state, action: PayloadAction<Book>) => {
            const {id, name, category, price, img, description} = action.payload
            const bookMatch = state.books.find(book => book.id === id)
            
            if(bookMatch) {
                bookMatch.name = name,
                bookMatch.category = category,
                bookMatch.price = price,
                bookMatch.img = img,
                bookMatch.description = description
            }
        },
        deleteBook: (state, action:PayloadAction<string>) => {
            state.books = state.books.filter(book =>
                book.id !== action.payload)
        }
    }
})

export const {addBook, editBook, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;
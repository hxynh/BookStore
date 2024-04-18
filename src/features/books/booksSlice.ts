import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
//import booksList from "../../assets/books.json";
import { booksService  } from "./booksService";
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
    books: Book[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    message: any
}

const initialState: BookState = {
    books: [],
    loading: 'idle',
    message: ''
    
}

export const getBooks = createAsyncThunk('books/getAll', async(_, thunkAPI) => {
    try {
        return await booksService.showBooks()
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

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
                    bookMatch.id = id,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.books = action.payload
            })
            .addCase(getBooks.rejected, (state, action) => {
                state.loading = 'failed';
                state.message = action.payload
            })
    }
})

export const {addBook, editBook, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;
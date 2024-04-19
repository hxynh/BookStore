import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
//import booksList from "../../assets/books.json";
import { booksService  } from "./booksService";
import { toast } from "react-toastify";

export interface Book {
    _id: string,
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

export const showBooks = createAsyncThunk('books/getAll', async(_, thunkAPI) => {
    try {
        return await booksService.getBooks()
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const createBook = createAsyncThunk('book/create', async(bookDetails: Book, thunkAPI) => {
    try {
        return await booksService.addBook(bookDetails)
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const editBook = createAsyncThunk('book/edit', async(bookDetails: Book, thunkAPI) => {
    try {
        return await booksService.updateBook(bookDetails)
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const removeBook = createAsyncThunk('book/remove', async(bookId: string, thunkAPI) => {
    try {
        return await booksService.deleteBook(bookId)
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        reset: () => initialState
        /*
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
                const {_id, name, category, price, img, description} = action.payload
                const bookMatch = state.books.find(book => book._id === _id)
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
                state.books = state.books.filter(book => book._id !== action.payload)
                toast.success("Yay! Book successfully Deleted!")
            } catch (error) {
                toast.error("Oops, unable to Delete book! Please try again later")
            } 
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(showBooks.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(showBooks.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.books = action.payload
            })
            .addCase(showBooks.rejected, (state, action) => {
                state.loading = 'failed';
                state.message = action.payload
            })
            .addCase(createBook.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(createBook.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.books.push(action.payload)
            })
            .addCase(createBook.rejected, (state, action) => {
                state.loading = 'failed';
                state.message = action.payload
            })
            .addCase(editBook.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(editBook.fulfilled, (state) => {
                state.loading = 'succeeded';
            })
            .addCase(editBook.rejected, (state, action) => {
                state.loading = 'failed';
                state.message = action.payload
            })
            .addCase(removeBook.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(removeBook.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.books = state.books.filter(book => book._id !== action.payload)
            })
            .addCase(removeBook.rejected, (state, action) => {
                state.loading = 'failed';
                state.message = action.payload
            })
    }
})

//export const {addBook, editBook, deleteBook} = booksSlice.actions;
export const {reset} = booksSlice.actions;
export default booksSlice.reducer;
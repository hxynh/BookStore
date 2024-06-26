import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import userReducer from "../features/user/userSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        user: userReducer,
        books: booksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
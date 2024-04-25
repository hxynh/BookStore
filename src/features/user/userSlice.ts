import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import userService from "./userService";

export interface User {
    name: string,
    username: string,
    password: string    
}

export type loginInfo = {
    username: string,
    password: string
}

interface UserState {
    user: User | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: any
}

const user: User = JSON.parse(localStorage.getItem('user') || '""') ;

const initialState: UserState = {
    user: user || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//Register user
export const register = createAsyncThunk('user/register', async(user: User, thunkAPI) => {
    try {
        return await userService.register(user)
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//Login user
export const login = createAsyncThunk('user/login', async(user: loginInfo, thunkAPI) => {
    try {
        return await userService.login(user)
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//Logout user
export const logout = createAsyncThunk('user/logout', async() => {
    return await userService.logout();
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.user = null
                state.message = action.payload
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false;
                state.isError = true;
                state.user = null;
                state.message = action.payload
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false;
                state.isError = true;
                state.user = null;
                state.message = action.payload
            })
    }
})

export const { reset} = userSlice.actions;
export default userSlice.reducer;
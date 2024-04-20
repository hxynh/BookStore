import {createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import userInfo from "../../assets/user.json";

interface User {
    name: string,
    username: string,
    password: string    
}

interface UserState {
    user: User,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string
}

//const user: User = JSON.parse(localStorage.getItem('user') || '""') ;

const initialState: UserState = {
    user: {
        name: "",
        username: "",
        password: ""
    },
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export type loginInfo = {
    username: string,
    password: string
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
        login: (state, action: PayloadAction<loginInfo>) => {
            const {username, password} = action.payload
            if(userInfo.username === username && userInfo.password === password) {
                state.isSuccess = true
            } else {
                state.isSuccess = false
            }
        },
        
        logout: (state) => { 
            state.isSuccess = false;
            
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
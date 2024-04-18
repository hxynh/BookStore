import {createSlice, PayloadAction } from "@reduxjs/toolkit"; 

interface UserState {
    name: string,
    username: string,
    password: string,
    loggedIn: boolean
}


const initialState: UserState = {
    name: "Nancy Hou",
    username: "nhou",
    password: "123456",
    loggedIn: false
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
            if(state.username === username && state.password === password) {
                state.loggedIn = true
            } else {
                state.loggedIn = false
            }
        },
        
        logout: (state) => { 
            state.loggedIn = false;
            
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
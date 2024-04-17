import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string,
    loggedIn: boolean
}

const initialState: UserState = {
    name: "guest",
    loggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.name = action.payload === "" ? "guest" : action.payload
            state.loggedIn = true
        },
        logout: (state) => {
            state.name = "guest"
            state.loggedIn = false
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
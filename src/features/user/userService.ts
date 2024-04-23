import axios from "axios";
import { User, loginInfo } from "./userSlice";

const API_URL = "http://localhost:8000/user";

//Register user
const register = async (userData: User) => {
    const response = await axios.post(API_URL+"/register", userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Login User
const login = async (user: loginInfo) => {
    const response = await axios.post(API_URL+"/login", user)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Logout user
const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
        register, 
        login, 
        logout}

export default authService


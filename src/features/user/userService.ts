import axios from "axios";
import { User, loginInfo } from "./userSlice";

const API_URL = "https://book-store-backend-rho.vercel.app/user";

//Register user
const register = async (userData: User) => {
    const response = await axios.post(API_URL+"/register", userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Login User
const login = async (userData: loginInfo) => {
    console.log("in login services, ", userData)
    const response = await axios.post(API_URL+"/login", userData)
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


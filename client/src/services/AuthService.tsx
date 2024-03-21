import axios from "axios";
import { UserLogin, UserRegister } from "../types/types"

const registerService = async (data: UserRegister) => {
    return await axios.post(
        
            "http://localhost:5000/api/Auth/Register",

            data
        )
}

const loginService = async (data: UserLogin) => {
    return await axios.post(
        
            "http://localhost:5000/api/Auth/Login",

            data
        )
}

export {
    registerService,
    loginService
};
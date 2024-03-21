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

const refreshTokenService = async (Token: string, RefreshToken: string) => {
    return await axios.post(
        
            "http://localhost:5000/api/Auth/RefreshToken",

            {
                Token: Token,
                RefreshToken: RefreshToken
            }
        )
}

export {
    registerService,
    loginService,
    refreshTokenService
};
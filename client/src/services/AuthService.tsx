import axios from "axios";
import { UserLogin, UserRegister } from "../types/types"
import {
    LOGIN_API_URL,
    REGISTER_API_URL,
    REFRESH_TOKEN_API_URL
} from "../constants/apiUrls"

const registerService = async (data: UserRegister) => {
    return await axios.post(

        REGISTER_API_URL,

        data
    )
}

const loginService = async (data: UserLogin) => {
    return await axios.post(

        LOGIN_API_URL,

        data
    )
}

const refreshTokenService = async (Token: string, RefreshToken: string) => {
    return await axios.post(

        REFRESH_TOKEN_API_URL,

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
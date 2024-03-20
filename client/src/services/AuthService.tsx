import axios from "axios";
import { UserRegister } from "../types/types"

const registerService = async (data: UserRegister) => {
    return await axios.post(
        
            "http://localhost:5000/api/Auth/Register",

            data
        )
}

export {
    registerService,
};
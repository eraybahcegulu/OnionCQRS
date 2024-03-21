import axios from "axios"
import { GET_PRODUCTS_API_URL } from "../constants/apiUrls"

const getProductsService = async (token: string) => {
    return await axios.get(
            GET_PRODUCTS_API_URL,

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
};

export {
    getProductsService,
};
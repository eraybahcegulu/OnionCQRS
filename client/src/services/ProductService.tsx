import axios from "axios"
import { CREATE_PRODUCT_API_URL, GET_PRODUCTS_API_URL } from "../constants/apiUrls"
import { CreateProduct } from "../types/types";
import useUserContext from "../hooks/useUserContext";

const ProductService = () => {
    const { user } = useUserContext()

    const getProductsService = async () => {
        return await axios.get(
                GET_PRODUCTS_API_URL,
    
                {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                }
            );
    };
    
    const createProductService = async (data: CreateProduct) => {
        console.log(data);
        return await axios.post(
    
            CREATE_PRODUCT_API_URL,
    
            data,
    
            {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                }
            }
        )
    }

    return { getProductsService, createProductService}
}
export default ProductService


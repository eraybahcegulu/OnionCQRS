import axios from "axios"
import { GET_BRANDS_API_URL } from "../constants/apiUrls"
import useUserContext from "../hooks/useUserContext";

const BrandService = () => {
    const { user } = useUserContext()
    const getBrandsService = async () => {
        return await axios.get(
            GET_BRANDS_API_URL,
    
                {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                }
            );
    };
    return { getBrandsService }
}

export default BrandService
const apiURL = `${import.meta.env.VITE_API_URL}`;

export const REGISTER_API_URL = `${apiURL}/Auth/Register`;
export const LOGIN_API_URL = `${apiURL}/Auth/Login`;
export const REFRESH_TOKEN_API_URL = `${apiURL}/Auth/RefreshToken`;

export const GET_PRODUCTS_API_URL = `${apiURL}/Product/GetAllProducts`;
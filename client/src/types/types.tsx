import { ReactNode } from "react";

export interface UserRegister {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface ErrorResponse {
    Errors: string[];
}

export interface UserProviderProps {
    children: ReactNode;
}

export interface User {
    fullName: string;
    email: string;
    refreshToken: string;
    token: string;
}

export interface UserContextType {
    user: User | null;
    userIsLoading: boolean;
    setUserIsLoading(value: boolean): void;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface Product {
    id: number;
    title: string;
    brand:{
        name: string;
    }
    description: string;
    price: number;
    discount: number;
    createdDate: Date;
}

export interface CreateProduct {
    title: string;
    brandId: string;
    description: string;
    price: number;
    discount: number;
    categoryIds: object
}

export interface Brand {
    id: number;
    name: string;
    createdDate: Date;
}
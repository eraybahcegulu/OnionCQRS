import React, { createContext, useEffect, useState } from 'react';
import { ErrorResponse, User, UserContextType, UserProviderProps } from '../types/types';
import { refreshTokenService } from '../services/AuthService';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const UserContext = createContext<UserContextType>({
    user: null,
    userIsLoading: true,
    setUserIsLoading: () => { },
    setUser: () => { }
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [userIsLoading, setUserIsLoading] = useState<boolean>(true);

    const fetchUserData = async (token: string, refreshToken: string) => {
        try {
            const res = await refreshTokenService(token, refreshToken);
            setUser(res.data)
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('token', res.data.token);
        } catch (error) {
            const axiosError = error as AxiosError
            if (axiosError.response && axiosError.response.data) {
                const errorMessage = (axiosError.response.data as ErrorResponse).Errors[0];
                toast.error(errorMessage);
                localStorage.clear();
            }
            else {
                toast.error("Server Error");
            }
        }
        setUserIsLoading(false);
    };

    const rememberMe = () => {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        if (token && refreshToken) {
            fetchUserData(token, refreshToken);
        }
    };

    useEffect(() => {
        rememberMe();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                userIsLoading,
                setUserIsLoading
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export {
    UserProvider
}

export default UserContext;

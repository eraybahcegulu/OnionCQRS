import React, { createContext, useState } from 'react';
import { User, UserContextType, UserProviderProps } from '../types/types';

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {}
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
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

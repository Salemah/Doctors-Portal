import React, { createContext } from 'react';
import Usefirebase from '../Hook/Usefirebase/Usefirebase';
export const AuthContext = createContext();

const Authprovider = ({ children }) => {
    const allcontext = Usefirebase();
    return (
        <AuthContext.Provider value={allcontext}>
            { children }
        </AuthContext.Provider>
    );
};

export default Authprovider;
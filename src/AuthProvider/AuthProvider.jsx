import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        let handler = () => {
            setIsOpen(false)
        }
        document.addEventListener("mousedown", handler)
    }, [])
    const authInfo = {
        isOpen,
        setIsOpen,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
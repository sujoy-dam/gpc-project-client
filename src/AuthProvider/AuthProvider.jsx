import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [user, setUser] = useState(null)
    useEffect(() => {
        let handler = () => {
            setIsOpen(false)
        }
        document.addEventListener("mousedown", handler)
    }, [])

    const handleCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSingIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignOut = () => {
        return signOut(auth)
    }
    const handleUpdateProfile = (name, photo = "") => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        isOpen,
        setIsOpen,
        handleCreateUser,
        handleSingIn,
        handleUpdateProfile,
        handleSignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
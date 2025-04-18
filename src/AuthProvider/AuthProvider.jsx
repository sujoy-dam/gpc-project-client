import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [isOpen, setIsOpen] = useState(true)
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    useEffect(() => {
        let handler = () => {
            setIsOpen(false)
        }
        document.addEventListener("mousedown", handler)
    }, [user])

    const handleCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSingIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleSignIn= ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const handleUpdateProfile = (name, photo = "") => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)
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
        handleSignOut,
        user,
        setUser,
        handleGoogleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
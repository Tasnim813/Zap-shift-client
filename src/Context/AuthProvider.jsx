import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { GoogleAuthProvider } from "firebase/auth";

const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const registerUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const SignInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleprovider)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    // const resetPassword=(email)=>{
    //     return sendPasswordResetEmail(auth,email)
    // }
    // observe user state
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            unSubscribe();
        }

    },[])
    const authInfo={
        registerUser,
        SignInUser,
        SignInGoogle,
        user,
        loading,
        logOut,
        updateUserProfile,
        // resetPassword

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
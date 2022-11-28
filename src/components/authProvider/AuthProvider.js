import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) =>{

    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const SignIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
     createUser,
     SignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
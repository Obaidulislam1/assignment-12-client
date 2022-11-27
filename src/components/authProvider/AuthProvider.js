import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) =>{

    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const authInfo ={
     user,
     loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
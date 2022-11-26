import React, { Children, createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({childrewc}) => {

    const authInfo ={

    }
    return (
        <AuthContext.Provider value={authInfo}>
           {Children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
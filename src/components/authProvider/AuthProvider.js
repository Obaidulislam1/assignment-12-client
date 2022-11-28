import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);

    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const SignIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
useEffect(() =>{
  const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
       console.log(currentUser); 
       setUser(currentUser)
    })
    return () => unSubscribe();
},[])

    const authInfo ={
     createUser,
     SignIn,
     user
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
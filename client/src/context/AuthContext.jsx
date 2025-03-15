import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);


import React from 'react'

const AuthContextProvider = ({children}) => {
    // const [user,setUser]= useState();
    const [token,setToken]= useState(localStorage.getItem('token')|| '');
    // const [isAuthenticated,setIsAuthenticated]=useState(false);

async function login(data){
   const response = await axios.post('https://notes-app-server-vert.vercel.app/login',{email:data.email,password:data.password});
   console.log('login response ',response.data);
   setToken(response.data.token);
   localStorage.setItem('token',response.data.token);

}
async function signup(data){
  try {
    const response = await axios.post('https://notes-app-server-vert.vercel.app/signup',{name:data.name,email:data.email,password:data.password});
    console.log(response.data);
    if(response.data){
      setToken(response.data.token);
      localStorage.setItem('token',response.data.token);

    }
  } catch (error) {
    console.log(error.message);
    
  }

    
}
  return (
     <AuthContext.Provider value={{token:token,setToken:setToken,login:login,signup:signup}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;

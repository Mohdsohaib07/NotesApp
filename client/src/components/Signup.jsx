import React, { useState } from 'react'
import styles from './Signup.module.css'
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const Signup = ({isUser,setIsUser}) => {
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const {signup}=useContext(AuthContext);
const navigate = useNavigate();
function handleChange(e){
  if(e.target.name=='name'){
    setName(e.target.value);
    
  }
  else if(e.target.name=='email'){
    setEmail(e.target.value);
    console.log(email);
    
  }
  else{
    setPassword(e.target.value);
    console.log(password);
    
  }
}
  function handleClick(){
    setIsUser(!isUser);
}

function handleSubmit(e){
  e.preventDefault();
  signup({name,email,password});
  navigate('/home');
  
}
  return (
    <div className={`${styles.form_container}`}>
      <h2 className={`${styles.h1}`}>Sign Up</h2>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <label htmlFor="name" className={`${styles.label}`}>Name
        <input type="text" name='name' className={`${styles.input}`} value={name} onChange={handleChange}/></label>
        <label htmlFor="email"className={`${styles.label}`}>Email
        <input type="email" name='email' className={`${styles.input}`} value={email} onChange={handleChange}/></label>
        <label htmlFor="password"className={`${styles.label}`}>Password
        <input type="password" name='password' className={`${styles.input}`} value={password} onChange={handleChange}/></label>
        <button type="submit" className={`${styles.button}` }>Sign Up</button>
       
      </form>
      <p>already have account? 
        <button style={{border:"none",background:"none",color:"blue",fontSize:"18px",cursor:"pointer"}} 
         onClick={handleClick}>Login</button></p>
    </div>
  )
}
export default Signup

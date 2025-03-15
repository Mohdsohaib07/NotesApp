import React,{useState} from 'react'
import styles from './login.module.css'
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
const Login = ({isUser,setIsUser}) => {
  const {login}=useContext(AuthContext);
 const [email,setEmail]= useState('');
 const [password,setPassword]= useState('');

  
 const navigate = useNavigate();

function handleClick(){
    setIsUser(!isUser);
}

function handleChange(e){
 if(e.target.name=='email'){
    setEmail(e.target.value);
    console.log(email);
    
  }
  else{
    setPassword(e.target.value);
    console.log(password);  
  }
}

function handleSubmit(e){
  e.preventDefault();
  login({email,password});
  console.log('form submitteed');
  navigate('/home');
  
}
  return (
    <div className={`${styles.form_container}`}>
      <h2 className={`${styles.h1}`}>Login</h2>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <label htmlFor="email"className={`${styles.label}`}>Email
        <input type="email" name='email' className={`${styles.input}`} value={email} onChange={handleChange}/></label>
        <label htmlFor="password"className={`${styles.label}`}>Password
        <input type="password" name='password' className={`${styles.input}`} value={password} onChange={handleChange}/></label>
        <button  className={`${styles.button}`}>Log In</button>
      </form>
      <p>Don't have account? 
        <button style={{border:"none",background:"none",color:"blue",fontSize:"18px",cursor:"pointer"}}
         onClick={handleClick}>Sign Up</button></p>
    </div>
  )
}

export default Login

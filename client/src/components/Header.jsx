import React from 'react'
import styles from './Header.module.css';
import BackButton from './BackButton';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const {setToken}=useContext(AuthContext);
  
  //loggin out user
  function handleLogout(){
    setToken('');
    localStorage.removeItem('token');
    const confirmBox = window.confirm('confirm Logout ?');
    console.log(confirmBox);
     if(confirmBox){
    
       navigate('/');
     }
  }
  return (
    <div className={`${styles.header}`}>
      <BackButton className={`${styles.back_button}`}/>
      <h1>Notes App</h1>
      <button className={`${styles.button}`} onClick={handleLogout}>Logout</button>
    </div>
  )
}
export default Header;

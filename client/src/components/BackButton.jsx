import React from 'react'
import {useNavigate}from 'react-router-dom';
import styles from './Header.module.css';
import { IoArrowBackSharp } from "react-icons/io5";
const BackButton = () => {
    const navigate = useNavigate();
function handleBack(){
    navigate(-1);
}
  return (
    <div onClick={handleBack} className={`${styles.back_button}`}>
      <IoArrowBackSharp/>
    </div>
  )
}

export default BackButton

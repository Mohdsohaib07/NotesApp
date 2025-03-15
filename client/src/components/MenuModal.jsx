import React from 'react'
import {createPortal} from 'react-dom'
import styles from './MenuModal.module.css'
import { IoMdClose } from "react-icons/io";
import { useNavigate} from 'react-router-dom';
import { notesContext } from '../context/NotesContext';
import { useContext } from 'react';
const MenuModal = ({isOpen,setIsOpen,note}) => {
  const {deleteNote}= useContext(notesContext);
  const navigate = useNavigate();
  function handleMenuclose(e){
   e.stopPropagation();
   console.log(note);
   
    setIsOpen(!isOpen);
  }
  function handleNavigation(note){
    navigate('/edit',{state:note});
  }
  return createPortal((
    <div className={`${styles.menuModal_container_overlay}`} onClick={handleMenuclose}>
      <div className={`${styles.menuModal_container}`}>
      <div className={`${styles.notes_upSection}`}>
       <h3>{note.title}</h3>
        <IoMdClose className={`${styles.icon}`} onClick={handleMenuclose}/>
      </div>
      <div className={`${styles.notes_bottomSection}`}>

       <button onClick={()=>handleNavigation(note)}>Edit</button>
        <button onClick={()=>deleteNote(note._id)}>Delete</button>
      </div>
      </div>

    </div>
  ),document.getElementById('modal'));
}

export default MenuModal;

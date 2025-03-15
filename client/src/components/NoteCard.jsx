import React,{useState} from 'react'
import styles from './NotesCard.module.css';
import { CiMenuKebab } from "react-icons/ci";
import MenuModal from './MenuModal'
const NoteCard = ({onSmash,note,isOpen,setIsOpen}) => {
  function menuClicked(e){
    e.stopPropagation();
    return setIsOpen(!isOpen);
  }
  return (
    <div className={`${styles.card_container}`} onClick={onSmash}>
      <div className={`${styles.title_section}`}>
        <h3 className={`${styles.title}`}>{note?.title}</h3>
        <CiMenuKebab className={`${styles.icon}`} onClick={menuClicked}/>
      </div>
      <p>{note?.text}</p>
      {isOpen && <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} note={note}/>}
    </div>
  )
}

export default NoteCard;

import React, { useState } from 'react'
import Header from '../components/Header'
import { IoAddSharp } from "react-icons/io5";
import { notesContext } from '../context/NotesContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
const addNote = () => {
  const navigate = useNavigate();
  const {addNewNote}= useContext(notesContext);
  const [title,setTitle]= useState('');
  const [text,setText]= useState('');

  function handleChange(e){
    console.log(e.target);
      (e.target.name=='title'?setTitle(e.target.value):setText(e.target.value)); 
  }

  async function handleAddNote(e){
    e.preventDefault();
    const data={
      title:title,
      text:text
    }
    addNewNote(data);
    toast.success('New note added !');
    setTitle('');
    setText('');
    navigate('/home');

  }
  return (
    <div className='add-note-container'>
      <Header/>
      <h3>Add Note</h3>
      <form className='add-form' onSubmit={handleAddNote}>
        <label htmlFor="title" className='add-form-label'>Title
          <input type="text" name='title' className='add-form-input' value={title} onChange={handleChange}/>
        </label>
        <label htmlFor="textarea" className='add-form-label'> Text
          <textarea type="text" name='textarea' className='add-form-textarea' value={text} onChange={handleChange}/>
        </label>
        <button className='add-note-button' type='submit'>Add  <IoAddSharp/></button>
      </form>
    </div>
  )
}

export default addNote

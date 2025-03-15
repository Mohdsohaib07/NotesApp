import React,{useState} from 'react'
import Header from '../components/Header'
import { notesContext } from '../context/NotesContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const EditNote = () => {
  const navigate = useNavigate();
  const {editNote}= useContext(notesContext);
  const location = useLocation();
  const note = location.state;
  console.log(note);
  const [title,setTitle]= useState(note.title);
  const [text,setText]= useState(note.text);

  function handleChange(e){
    console.log(e.target);
      (e.target.name=='title'?setTitle(e.target.value):setText(e.target.value)); 
  }

  async function handleEditNote(e){
    e.preventDefault();
    const data={
      title:title,
      text:text
    }
    editNote(note._id,data)
    setTitle('');
    setText('');
    navigate('/home');

  }
  return (
    <div className='add-note-container'>
      <Header/>
      <h3>Edit Note</h3>
      <form className='add-form' onSubmit={handleEditNote}>
        <label htmlFor="title" className='add-form-label'>Title
          <input type="text" name='title' className='add-form-input' value={title} onChange={handleChange}/>
        </label>
        <label htmlFor="textarea" className='add-form-label'> Text
          <textarea type="text" name='textarea' className='add-form-textarea' value={text} onChange={handleChange}/>
        </label>
        <button className='add-note-button' type='submit'>Edit </button>
      </form>
    </div>
  )
}

export default EditNote

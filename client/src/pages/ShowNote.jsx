import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
const ShowNote = () => {
  const location = useLocation();
  const note = location.state;
  console.log('note is ', note);
  
  return (
    <div>
      <Header/>
      <div className='show-note-container'>
        <h1>{note.title}</h1>
        <p>{note.text}</p>
      </div>
    </div>
  )
}

export default ShowNote

import React,{ useState} from 'react'
import Header from '../components/Header'
import NoteCard from '../components/NoteCard'
import Loader from '../components/Loader'
import { Link,useNavigate } from 'react-router-dom'
import { notesContext } from '../context/NotesContext'
import { useContext } from 'react'
const Home = () => {
  const [isOpen,setIsOpen]= useState(false);
  const {notes,loading} = useContext(notesContext);

  const navigate = useNavigate();
   console.log(notes);

  function handleNavigation(note){
    if(note!=null){
      navigate('/show',{state:note});
    }
    else{
      return console.log('no note exists');
      
    }
  }


  return (
    <div className='home_container'>
     <Header/>
     <Link to={'/add'}><button className='add-btn'>Add New Note</button></Link>
     <h1>Your Notes</h1>
     <div className='cards'>
     {(loading==false && notes?.data!=null)? notes?.data.map((note)=>{
      return <NoteCard key={note?._id} note={note} onSmash={()=>handleNavigation(note)} isOpen={isOpen} setIsOpen={setIsOpen}/>

     }):<Loader/>}
     </div>
    </div>
  )
}

export default Home

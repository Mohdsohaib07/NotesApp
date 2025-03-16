import React,{ useState} from 'react'
import Header from '../components/Header'
import NoteCard from '../components/NoteCard'
import Loader from '../components/Loader'
import { Link,useNavigate } from 'react-router-dom'
import { notesContext } from '../context/NotesContext'
import { useContext } from 'react'
const Home = () => {
  const [isOpen,setIsOpen]= useState(false);
  const [search,setSearch]= useState('');
  const [isSearching,setIsSearching]= useState(false);
  const [foundNote,setFoundNote]= useState([]);

  const {notes,loading} = useContext(notesContext);
  const navigate = useNavigate();

  function handleNavigation(note){
    if(note!=null){
      navigate('/show',{state:note});
    }
    else{
      return console.log('no note exists');
      
    }
  }

  function handleSearch(e){
    console.log(e.target.value);
    
    setSearch(e.target.value);
  }

  //implement search functionality
function searchNote(e){
e.preventDefault();
try {
  setIsSearching(true);
  const found = notes.data.filter((note)=>{
    return note.title.toLowerCase().includes(search.toLowerCase());
  });
  setFoundNote(found)
  console.log(found);
  setSearch('');
  // for(let i=0;i<notes.data.length;i++){
  //   const note =notes.data[i].title.toLowerCase();
  //   if(note.includes(search.toLowerCase())){
  //     console.log('match found');
  //     break;
  //   }
  //   else{console.log('no match');
  //   }
  // }
} catch (error) {
  console.log(error.message);
  
}

}
  return (
    <div className='home_container'>
     <Header/>
     <Link to={'/add'}><button className='add-btn'>Add New Note</button></Link>
      <div className='home-search-container'>
      <input className='add-form-input' placeholder='Search by title..' value={search} onChange={handleSearch}/>
      <button onClick={searchNote} className='add-note-button'>Search</button>
      </div>
     <h1>Your Notes</h1>
     <div className='cards'>
      {/* {notes?.data==null?<h4>no data here</h4>:''} */}
      {loading==true ?<Loader/>:''}
     {(loading==false && notes?.data!=null && isSearching==false)? notes?.data.map((note)=>{
      return <NoteCard key={note?._id} note={note} onSmash={()=>handleNavigation(note)} isOpen={isOpen} setIsOpen={setIsOpen}/>

     }):''}
     {isSearching==true ? foundNote.map((note)=>{
      return <NoteCard key={note?._id} note={note} onSmash={()=>handleNavigation(note)} isOpen={isOpen} setIsOpen={setIsOpen}/>
     }
    ):''}
     </div>
    </div>
  )
}

export default Home;

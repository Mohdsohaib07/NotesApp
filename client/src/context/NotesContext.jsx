import { createContext, useEffect, useState } from "react";
import  axios from 'axios'
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import {toast} from 'react-toastify';


export const notesContext = createContext(null);



export const NotesProvider =({children})=>{
    const [notes,setNotes]= useState('');
    const [loading,setLoading]= useState(true);
    const {token}=useContext(AuthContext);
//read all notes
async function getNotes(){
  
        try {
            if(token){
            let response = await axios.get('https://notes-app-server-snowy.vercel.app/note',
                {headers:{
                "authorization":token
            }});
            setNotes(response.data);
            setLoading(false);
        }
        else{
            console.log('token not yet reiceved');
            
        }

        } catch (error) {
            console.log(error);
            
        }
        finally{
            setLoading(false);
        }

            
        }
    useEffect(()=>{
        getNotes();
    },[token]);
//deleting a note
   async function deleteNote(id){
    try {
        const confirmBox= confirm('are You sure?');
        if(confirmBox==true){
        const res = await axios.delete(`https://notes-app-server-snowy.vercel.app/note/${id}`,{headers:{
            "Authorization":token
          }});
          toast.success(res.data.message);
          console.log(res.data);
          getNotes();}
          else{return}
    } catch (error) {
        console.log(error.message); 
    }  
    }

 //add note
async function addNewNote(data){
        try {
            const response = await axios.post('https://notes-app-server-snowy.vercel.app/note',data,{headers:{
                "Authorization":token
              }});
              console.log(response.data.message);
              getNotes();
        } catch (error) {
            console.log(error.message);
            
        }
    }
//edit note
async function editNote(id,data) {
    try {
        const res = await axios.patch(`https://notes-app-server-snowy.vercel.app/note/${id}`,data,{headers:{
            "Authorization":token
        }});
        console.log(res.data);
        toast.success(res.data.message);
       return getNotes();
    } catch (error) {
        console.log(error.message);
        
    }
}
    return(
        <notesContext.Provider value={{notes:notes,setNotes:setNotes,addNewNote:addNewNote,loading:loading,deleteNote:deleteNote,editNote:editNote}}>
            {children}
        </notesContext.Provider>
    )
}
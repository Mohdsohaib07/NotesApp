import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Authenticate from './pages/Authenticate'
import ShowNote from './pages/ShowNote';
import EditNote from './pages/EditNote';
import AddNote from './pages/AddNote';
import NotFound from './pages/NotFound';
import { NotesProvider } from './context/NotesContext';
import {ToastContainer} from 'react-toastify';
function App() {


  return (
 
    <NotesProvider>
    <Routes>
      <Route path='/' element={<Authenticate/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/edit' element={<EditNote/>}/>
      <Route path='/show' element={<ShowNote/>}/>
      <Route path='/add' element={<AddNote/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <ToastContainer position="bottom-center"/>
    </NotesProvider>
  )
}

export default App

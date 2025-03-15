import React, { useState } from 'react'
import Header from '../components/Header'
import Signup from '../components/Signup'
import Login from '../components/Login'
const Authenticate = () => {
  const [isUser,setIsUser]= useState(false);
  return (
    <div>
      <Header/>
      {isUser? <Login isUser={isUser} setIsUser={setIsUser}/>: <Signup setIsUser={setIsUser} isUser={isUser}/>}
    </div>
  )
}

export default Authenticate;

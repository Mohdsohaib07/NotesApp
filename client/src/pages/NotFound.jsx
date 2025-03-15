import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const NotFound = () => {
  return (
    <div className='not-found'>
      <Header/>
      <div className="container-404-image">
      <img src="404.webp" alt="not found" />
      </div>
      <Link to='/'>
      <button>go back</button>
      </Link>
    </div>
  )
}

export default NotFound

import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='container'>
        <h1>My Website</h1>
        <div className='buttons'>
            <Link to='/'><button>Home</button></Link>
            <Link to='/NotHome'><button>Not Home</button></Link>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar

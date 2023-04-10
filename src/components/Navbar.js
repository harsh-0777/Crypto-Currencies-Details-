import React from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>

       <div className="nav-one">
         <h1>Crypto World</h1>
       </div>

       <div className="nav-two">
       
        <Link to='/' className="nav-links">Home</Link>
        <Link to='/crypto' className="nav-links">Crypto</Link>
        <Link to='/news' className="nav-links">News</Link>
        
       </div>

    </div>
  )
}

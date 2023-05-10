import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <div>
        <Link to='/' style={{textDecoration: 'none'}}><span className='logo'>Movie Zone</span> </Link>
        <Link to='/movies/popular' style={{textDecoration: 'none'}}><span className='tabs'>Popular</span> </Link>
        <Link to='/movies/top_rated' style={{textDecoration: 'none'}}> <span className='tabs'>Top Rated</span> </Link>
        <Link to='/movies/upcoming' style={{textDecoration: 'none'}}> <span className='tabs'>Upcoming</span> </Link>
      </div>
    </nav>
  )
}

export default Header

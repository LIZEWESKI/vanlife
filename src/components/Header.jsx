import React from 'react'
import {NavLink , Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header className='main__header'>
        <Link to=".">
            <span className='brand--title'>#VANLIFE</span>
        </Link>
        <nav>
            <ul>
                <li><NavLink to="host" className={({isActive})=> isActive ? "link--selected" : null}>Host</NavLink></li>
                <li><NavLink to="about" className={({isActive})=> isActive ? "link--selected" : null}>About</NavLink></li>
                <li><NavLink to="vans" className={({isActive})=> isActive ? "link--selected" : null}>Vans</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
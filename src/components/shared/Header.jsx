import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
        <Link to="/">
            <span className='brand--title'>#VANLIFE</span>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/vans">Vans</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
import React, { useEffect , useState } from 'react'
import {NavLink , Link} from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import './Header.css'
const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false)
  const logOut = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }
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
                <li><NavLink to="login" style={{fontSize: "24px"}} className={({isActive})=> isActive ? "link--selected" : null}><FaRegCircleUser /></NavLink></li>
                { isLoggedIn && <button onClick={logOut}>Log out</button> }
            </ul>
        </nav>
    </header>
  )
}

export default Header
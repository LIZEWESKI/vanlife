import React from 'react'
import { Outlet , NavLink } from 'react-router-dom'
import './HostLayout.css'
const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
    <main className='host__main'>
      <nav className='host__nav'>
        <ul>
          <li><NavLink to="." end style={({isActive})=> isActive ? activeStyle : null }>Dashboard</NavLink></li>
          <li><NavLink to="income" style={({isActive})=> isActive ? activeStyle : null }>Income</NavLink></li>
          <li><NavLink to="vanshost" style={({isActive})=> isActive ? activeStyle : null }>Vans</NavLink></li>
          <li><NavLink to="reviews" style={({isActive})=> isActive ? activeStyle : null }>Reviews</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </main>
  )
}

export default HostLayout
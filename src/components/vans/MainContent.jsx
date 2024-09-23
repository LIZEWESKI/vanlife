import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './MainContent.css'
import Van from './Van'
const MainContent = () => {
  const [vans,setVans] = useState([]);
  useEffect(()=> {
    fetch('/api/vans')
      .then(response => response.json())
      .then(data => setVans(data.vans))
        .catch(error => console.error('Error:', error));  
  },[])
  return (
    <main className='vans--main'>
        <h1>Explore our van options</h1>
        <div className="filter--wrapper">
            <button>Simple</button>
            <button>Luxury</button>
            <button>Rugged</button>
            <span>Clear filters</span>
        </div>
        <div className="vans--grid">
            {vans.length === 0 ? <ClipLoader/> : vans.map(van => <Van key={van.id} van={van}/>)}
        </div>
    </main>
  )
}

export default MainContent
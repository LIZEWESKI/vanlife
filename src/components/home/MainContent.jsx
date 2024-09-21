import React from 'react'
import './MainContent.css'
import { Link } from 'react-router-dom'
const mainContent = () => {
  return (
    <main className='home--main'>
      <h1>
      You got the travel plans, we got the travel vans.
      </h1>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to='/vans'><button>Find your Van</button></Link>
    </main>
  )
}

export default mainContent
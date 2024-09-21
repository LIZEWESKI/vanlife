import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from '../../assets/vanlife-about-img.png'
import './MainContent.css'
const MainContent = () => {
  return (
    <main>
        <img src={AboutImg} alt="man-in-van" />
        <div className="content--wrapper">
            <h1>
                Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
            </p>
            <span>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</span>
            <div className='explore--wrapper'>
                <div>
                    <p>Your destination is waiting.</p>
                    <p>Your van is ready.</p>
                </div>
                <Link to='/vans'><button>Explore our vans</button></Link>
            </div>
        </div>
    </main>
  )
}

export default MainContent
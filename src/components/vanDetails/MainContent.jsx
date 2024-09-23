import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import './MainContent.css'
const MainContent = ({vanDetails}) => {
  return (
    vanDetails ? 
    <main className='vanDetails--main'>
      <div className="link--wrapper">
          <FaArrowLeftLong style={{ color: '#858585', fontSize: '16px' }}/>
          <Link className='link--vans' to="/vans">Back to all vans</Link>
      </div>
      <div className="vanDetails--info">
          <img src={vanDetails.imageUrl} alt={`Image of Van ${vanDetails.name}`} />
          <i className={vanDetails.type}>{vanDetails.type}</i>
          <h2>{vanDetails.name}</h2>
          <span><strong>${vanDetails.price}</strong>/day</span>
          <p>{vanDetails.description}</p>
          <button>Rent this van</button>
      </div>
    </main> : 
    <main className='vanDetails--main'>
      <ClipLoader/>
    </main>
  )
}

export default MainContent
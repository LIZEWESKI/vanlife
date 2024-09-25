import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import ClipLoader from "react-spinners/ClipLoader";
import './VanDetails.css'
const VanDetails = () => {
  const [vanDetails,setVanDetails] = useState(null)
  const {id} = useParams()
  useEffect(()=>{
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans))
        .catch(error => console.error('Error:', error));  
  },[id])
  return (
    <main className='vanDetails--main'>
      {vanDetails ? 
      <>
        <div className="link--wrapper">
            <FaArrowLeftLong style={{ color: '#858585', fontSize: '16px' }}/>
            <Link className='link--vans' to=".."relative='path'>Back to all vans</Link>
        </div>
        <div className="vanDetails--info">
            <img src={vanDetails.imageUrl} alt={`Image of Van ${vanDetails.name}`} />
            <i className={vanDetails.type}>{vanDetails.type}</i>
            <h2>{vanDetails.name}</h2>
            <span><strong>${vanDetails.price}</strong>/day</span>
            <p>{vanDetails.description}</p>
            <button>Rent this van</button>
        </div>
      </> : 
      <ClipLoader/> }
    </main>
  )
}

export default VanDetails
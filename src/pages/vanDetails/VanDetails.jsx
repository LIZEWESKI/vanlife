import React from 'react'
import {Link , useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api';
import { FaArrowLeftLong } from "react-icons/fa6";
import './VanDetails.css'
export function loader({params}){
  return getVans(params.id)
}
const VanDetails = () => {
  const vanDetails = useLoaderData()
  const location = useLocation()
  const search = location.state?.search || ""
  const searchType = location.state?.type || ""

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <main className='vanDetails--main'>
        <div className="link--wrapper">
            <FaArrowLeftLong style={{ color: '#858585', fontSize: '16px' }}/>
            <Link className='link--vans' to={`..${search}`} relative='path'>{`Back to ${searchType ? capitalizeFirstLetter(searchType) : "all"} vans`}</Link>
        </div>
        <div className="vanDetails--info">
            <img src={vanDetails.imageUrl} alt={`Image of Van ${vanDetails.name}`} />
            <i className={vanDetails.type}>{vanDetails.type}</i>
            <h2>{vanDetails.name}</h2>
            <span><strong>${vanDetails.price}</strong>/day</span>
            <p>{vanDetails.description}</p>
            <button>Rent this van</button>
        </div>
    </main>
  )
}

export default VanDetails
import React from 'react'
import { Link } from 'react-router-dom';
import './Van.css'
const Van = ({van}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return (
    <div className='van--main'>
      {/* aria-label for screen-readers */}
      <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
        <div className='van--wrapper'>
            <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
            <div className="van--info">
                <p>{van.name}</p>
                <p>${van.price} <small>/day</small></p>
            </div>
        </div>
        <i className={van.type}>{capitalizeFirstLetter(van.type)}</i>
      </Link>
    </div>
  )
}

export default Van
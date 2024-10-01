import React from 'react'
import './Van.css'
const Van = ({van}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className='van--main'>
        <div className='van--wrapper'>
            <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
            <div className="van--info">
                <p>{van.name}</p>
                <p>${van.price} <small>/day</small></p>
            </div>
        </div>
        <i className={van.type}>{capitalizeFirstLetter(van.type)}</i>
    </div>
  )
}

export default Van
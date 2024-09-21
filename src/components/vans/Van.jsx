import React from 'react'
import './Van.css'
const Van = ({van}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return (
    <div >
        <div className='van--wrapper'>
            <img src={van.imageUrl} alt="Beach Bum Van"/>
            <div className="van--info">
                <p>{van.name}</p>
                <p>${van.price} <small>/day</small></p>
            </div>
        </div>
        <button className={van.type}>{capitalizeFirstLetter(van.type)}</button>
    </div>
  )
}

export default Van
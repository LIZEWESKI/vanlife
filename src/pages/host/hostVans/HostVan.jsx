import React from 'react'
import { Link } from 'react-router-dom'
const HostVan = ({van}) => {
  return (
    <Link to={`/host/vanshost/${van.id}`}>
        <div className="van__wrapper">
            <img src={van.imageUrl} alt={`Image of ${van.name} van`} />
            <div className="listed-vans__info">
                <p className='van__name'>{van.name}</p>
                <p className='van__price'>${van.price}/day</p>
            </div>
        </div>
    </Link>
  )
}

export default HostVan
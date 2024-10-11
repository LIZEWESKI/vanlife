import React from 'react'

const HostVanDetail = ({hostedVanDetailPromise}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="host-van-details__info">
        <img src={hostedVanDetailPromise.imageUrl} alt={`Image of ${hostedVanDetailPromise.name} van`} />
        <div className="listed-vans__info">
            <i className={hostedVanDetailPromise.type}>{capitalizeFirstLetter(hostedVanDetailPromise.type)}</i>
            <p className='van__name'>{hostedVanDetailPromise.name}</p>
            <p className='van__price'><span>${hostedVanDetailPromise.price}</span>/day</p>
        </div>
    </div>
  )
}

export default HostVanDetail
import React from 'react'

const HostVanDetail = ({hostedVanDetail}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="host-van-details__info">
        <img src={hostedVanDetail.imageUrl} alt={`Image of ${hostedVanDetail.name} van`} />
        <div className="listed-vans__info">
            <i className={hostedVanDetail.type}>{capitalizeFirstLetter(hostedVanDetail.type)}</i>
            <p className='van__name'>{hostedVanDetail.name}</p>
            <p className='van__price'><span>${hostedVanDetail.price}</span>/day</p>
        </div>
    </div>
  )
}

export default HostVanDetail
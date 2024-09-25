import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostPhotos = () => {
    const {hostedVanDetail} = useOutletContext()
    const imgStyle = {
        width: '100px',
        height: 'auto',
        borderRadius: '8px',
    }
  return (
    <div>
        <img src={hostedVanDetail.imageUrl} alt={`Image of ${hostedVanDetail.name} van`} style={imgStyle} />
    </div>
  )
}

export default HostPhotos
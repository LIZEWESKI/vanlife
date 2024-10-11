import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostPhotos = () => {
    const {hostedVanDetailPromise} = useOutletContext()
    const imgStyle = {
        width: '100px',
        height: 'auto',
        borderRadius: '8px',
    }
  return (
    <div>
        <img src={hostedVanDetailPromise.imageUrl} alt={`Image of ${hostedVanDetailPromise.name} van`} style={imgStyle} />
    </div>
  )
}

export default HostPhotos
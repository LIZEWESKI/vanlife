import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostPricing = () => {
  const {hostedVanDetailPromise} = useOutletContext()
  return (
    <div>
      <p className='van__price'><span>${hostedVanDetailPromise.price}</span>/day</p>
    </div>
  )
}

export default HostPricing
import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostPricing = () => {
  const {hostedVanDetail} = useOutletContext()
  return (
    <div>
      <p className='van__price'><span>${hostedVanDetail.price}</span>/day</p>
    </div>
  )
}

export default HostPricing
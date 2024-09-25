import React from 'react'
import { useOutletContext } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const HostDetails = () => {
  const {hostedVanDetail} = useOutletContext();
  return (
    hostedVanDetail ? 
    <div className="host-van__details">
      <p><span>Name:</span> {hostedVanDetail.name}</p>
      <p><span>Category:</span> {hostedVanDetail.type}</p>
      <p><span>Description:</span> {hostedVanDetail.description}</p>
      <p><span>Visibility:</span> Public</p>
    </div>
    : 
    <ClipLoader/>
  )
}

export default HostDetails
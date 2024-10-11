import React from 'react'
import { useOutletContext } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const HostDetails = () => {
  const {hostedVanDetailPromise} = useOutletContext();
  return (
    hostedVanDetailPromise ? 
    <div className="host-van__details">
      <p><span>Name:</span> {hostedVanDetailPromise.name}</p>
      <p><span>Category:</span> {hostedVanDetailPromise.type}</p>
      <p><span>Description:</span> {hostedVanDetailPromise.description}</p>
      <p><span>Visibility:</span> Public</p>
    </div>
    : 
    <ClipLoader/>
  )
}

export default HostDetails
import React, { useEffect, useState } from 'react'
import HostVan from './HostVan';
import ClipLoader from "react-spinners/ClipLoader";
import './HostVans.css'
const HostVans = () => {
  const [hostedVans,setHostedVans] = useState([]);
  useEffect(()=> {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setHostedVans(data.vans))
        .catch(error => console.error('Error:', error));  
  },[])
  console.log(hostedVans)
  return (
    <main className='hostvans__main'>
      <h1 className='hostvans__title'>Your listed vans</h1>
      <div className="listed-vans__wrapper">
        {hostedVans.length === 0 ? <ClipLoader/> : hostedVans.map(van => <HostVan key={van.id} van={van}/>)}
      </div>
    </main>
  )
}

export default HostVans
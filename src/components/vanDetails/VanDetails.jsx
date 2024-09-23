import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import MainContent from './MainContent'
import { useParams } from 'react-router-dom'
const VanDetails = () => {
  const [vanDetails,setVanDetails] = useState(null)
  const {id,name} = useParams()
  useEffect(()=>{
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans))
        .catch(error => console.error('Error:', error));  
  },[id])
  return (
    <>
      <Header/>
      <MainContent vanDetails={vanDetails}/>
      <Footer/>
    </>
  )
}

export default VanDetails
import React, { useEffect, useState } from 'react'
import { useSearchParams,Link} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import fetchVans from "../../api.js"
import Van from './Van'
import './Vans.css'
const Vans = () => {
  const [vans,setVans] = useState([]);
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [searchParams,setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
  const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
  useEffect(()=> {
    async function loadVans() {
      setLoading(true)
      try {
        const vansData = await fetchVans()
        setVans(vansData)
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  },[])
  // for ref
  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }

  function handleSearchParams(key,value){
    setSearchParams(prevParams => {
      if(value === null) {
        prevParams.delete(key)      
      } else {
        prevParams.set(key,value)
      }
      return prevParams
    })
  }
  return (
    <main className='vans--main'>
        <h1>Explore our van options</h1>
        <div className="filter--wrapper">
            <button onClick={() => handleSearchParams("type","simple")} className={`van-type simple ${typeFilter === "simple" && "selected"}`}>Simple</button>
            <button onClick={() => handleSearchParams("type","luxury")} className={`van-type luxury ${typeFilter === "luxury" && "selected"}`}>Luxury</button>
            <button onClick={() => handleSearchParams("type","rugged")} className={`van-type rugged ${typeFilter === "rugged" && "selected"}`}>Rugged</button>
            {typeFilter && <span onClick={() => handleSearchParams("type",null)}className='van-type clear-filters'>Clear filters</span>}
        </div>
        <div className="vans--grid">
          {error && <h1>There was an error: {error.message}</h1>}
          {loading ? <ClipLoader/> : 
          displayedVans.map(van => 
            <Link to={`${van.id}`} state={{search: `?${searchParams}`, type:typeFilter}} key={van.id}>
              <Van van={van}/>
            </Link>)}
        </div>
    </main>
  )
}

export default Vans
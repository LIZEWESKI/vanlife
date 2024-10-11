import React , {Suspense} from 'react'
import { useSearchParams,Link, useLoaderData, defer, Await} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import {getVans} from "../../api.js"
import Van from './Van'
import './Vans.css'
// using defer 
export function loader(){
  const vansPromise = getVans()
  return defer({vans : vansPromise})
}
// export async function loader(){
//   return getVans()
// }
const Vans = () => {
  const getVans = useLoaderData()
  const [searchParams,setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
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
            <Suspense fallback={<ClipLoader/>}>
              <Await resolve={getVans.vans}>
                  {
                    (loadedVans)=> {
                      const displayedVans = typeFilter ? loadedVans.filter(van => van.type === typeFilter) : loadedVans
                      return (
                        <>
                          {displayedVans.map(van => 
                            <Link to={`${van.id}`} state={{search: `?${searchParams}`, type:typeFilter}} key={van.id}>
                              <Van van={van}/>
                            </Link>)
                          }
                        </>
                      )
                    }
                  }
              </Await>
            </Suspense>
        </div>
    </main>
  )
}

export default Vans
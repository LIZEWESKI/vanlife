import React , {Suspense} from 'react'
import HostVan from './HostVan';
import {getHostVans} from '../../../api'
import { requireAuth } from '../../../utils';
import './HostVans.css'
import { useLoaderData , defer, Await } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
// using Defer
export async function loader({request}){
  const getHostVansPromise = getHostVans()
  await requireAuth(request)
  return defer({hostVans : getHostVansPromise})
}
// export async function loader({request}){
//   await requireAuth(request)
//   return getHostVans()
// }
const HostVans = () => {
  const getHostedVans = useLoaderData()
  console.log(getHostedVans)
  return (
    <main className='hostvans__main'>
      <h1 className='hostvans__title'>Your listed vans</h1>
      <div className="listed-vans__wrapper">
        <Suspense fallback={<ClipLoader/>}>
          <Await resolve={getHostedVans.hostVans}>
            {(hostedVans)=> hostedVans.map(van => <HostVan key={van.id} van={van}/>)}
          </Await>
        </Suspense>
      </div>
    </main>
  )
}

export default HostVans
import React , {Suspense}  from 'react'
import { Link , NavLink ,Outlet, useLoaderData, defer, Await} from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import ClipLoader from "react-spinners/ClipLoader";
import HostVanDetail from './HostVanDetail';
import './HostVanDetailLayout.css'
import { getHostVans } from '../api';
import { requireAuth } from '../utils';
// defer loader fun
export async function loader({params,request}){
  const hostVanDetailPromise = getHostVans(params.id)
  await requireAuth(request)
  return defer({hostVanDetail : hostVanDetailPromise  })
}
// export async function loader({params,request}){
//   await requireAuth(request)
//   return getHostVans(params.id)
// }
const HostVanDetailLayout = () => {
  const hostedVanDetailPromise = useLoaderData()
  return (
    <main className='host-van-details__main'>
        <div className="link--wrapper">
          <FaArrowLeftLong style={{ color: '#858585', fontSize: '16px' }}/>
          <Link className='link--vans' to=".." relative='path'>Back to all vans</Link>
        </div>
        <div className="host-van-details__wrapper">
          <Suspense fallback={<ClipLoader/>}>
            <Await resolve={hostedVanDetailPromise.hostVanDetail}>
              {(hostedVanDetailPromise)=> {
                return (
                  <>
                    <HostVanDetail hostedVanDetailPromise={hostedVanDetailPromise}/>
                    <nav className='host-van-details__nav'>
                      <ul>
                        <li><NavLink to="." end className={({isActive})=> isActive ? 'link--selected' : null }>Details</NavLink></li>
                        <li><NavLink to="pricing" className={({isActive})=> isActive ? 'link--selected' : null }>Pricing</NavLink></li>
                        <li><NavLink to='photos' className={({isActive})=> isActive ? 'link--selected' : null }>Photos</NavLink></li>
                      </ul>
                    </nav>
                    <Outlet context={{hostedVanDetailPromise}}/>
                  </>
                )
              }}

            </Await>
          </Suspense>
        </div>
    </main>
  )
}

export default HostVanDetailLayout